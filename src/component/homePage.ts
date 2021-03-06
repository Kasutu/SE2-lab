import LoginForm from '../interface/loginForm';
import User from '../interface/user';
import Website from '../interface/website';
import Item from '../interface/item';

import Listings from './listingsPage';
import Checkout from './checkoutPage';
import ReviewActions from './reviewActions';
import Dashboard from './dashboard';
import UserList from '../db/usersList';
import FileSystem from '../db/fileSystem';
import ItemList from '../db/itemsList';
export default class HomePage implements Website {
  protected background: string;
  protected checkoutPage: Checkout;
  protected dbItems: Item[];
  protected fs: FileSystem<Item>;
  protected header: string;
  protected itemList: ItemList;
  protected page: Dashboard | Checkout | Listings | undefined;
  protected paragraph: string;
  protected review: ReviewActions | undefined;
  protected user: User | undefined;
  protected userList: UserList;
  protected users: User[];
  protected viewMode: string;
  protected voucherList: string[] | undefined;
  constructor(
    setHeader: string,
    setParagraph: string,
    setBackground: 'black' | 'white',
    vouchers?: string[],
    setPage?: Dashboard | Checkout | Listings
  ) {
    this.userList = new UserList();
    this.itemList = new ItemList();
    this.checkoutPage = new Checkout();
    this.review = new ReviewActions();
    this.dbItems = this.itemList.getItems();
    this.users = this.userList.getUsers();
    this.page = setPage;
    this.header = setHeader;
    this.paragraph = setParagraph;
    this.background = setBackground;
    this.viewMode = 'light';
    this.voucherList = vouchers;
    this.fs = new FileSystem(this.dbItems);
  }

  public addToCart(id: string): void {
    // adds items to cart list
    const obj: Item | undefined = this.fs.fetch(id);

    if (obj !== undefined) {
      this.user?.cartItems.push(obj);
    } else {
      throw 'INVALID ID';
    }
  }

  public checkout(): void {
    // sets to checkout page based on current user
    this.page = this.checkoutPage;
  }

  public getCartItems(): Item[] | string {
    // return item list of the user
    if (this.user !== undefined) {
      return this.user?.cartItems;
    } else {
      return 'LOG IN FIRST!';
    }
  }

  public getCurrentPage(): Dashboard | Checkout | Listings | undefined {
    return this.page;
  }

  public getItemUrl(id: string): string | undefined {
    // searches the local db for matching items and returns a dummy url
    if (this.user !== undefined) {
      return this.fs.fetch(id)?.url;
    } else {
      return 'LOG IN FIRST!';
    }
  }

  public getUser(): User | undefined {
    return this.user;
  }

  public getVoucher(index: number): void {
    // transfers voucher code to user
    if (this.voucherList !== undefined) {
      this.user?.voucherCodes.push(this.voucherList[index]);
    } else {
      throw 'LOG IN FIRST!';
    }
  }

  public refreshWall(): void {
    // refreshes the constructor
    console.log('refreshing');
  }

  public setUser(login: LoginForm): void {
    // sets current user and display the dummy data to this class
    // NOTE: removed the password for simplicity of testing
    for (let i = 0; i < this.users.length; i++) {
      let user: User = this.users[i];

      if (user.username === login.username) {
        this.user = user;
        console.log('USER LOGGED IN: ', login.username);
      }
    }

    if (this.user === undefined) {
      console.log('INVALID USERNAME!');
    }
  }

  public toggleDarkMode(): void {
    if (this.viewMode === 'light') {
      this.viewMode = 'dark';
    } else {
      this.viewMode = 'light';
    }
  }
}
