import Checkout from '../interface/checkout';
import LoginForm from '../interface/loginForm';
import User from '../interface/user';
import Website from '../interface/website';
import ReviewActions from './reviewActions';
import Listings from '../interface/listings';
import Dashboard from './dashboard';

export default class HomePage implements Website {
	protected user: User | undefined;
	protected page: Dashboard | Checkout | Listings;
	protected header: string;
	protected paragraph: string;
	protected background: string;
	protected voucherList: string[];
	protected review: ReviewActions;
	protected viewMode: string;

	constructor(
		setPage: Dashboard | Checkout | Listings,
		setHeader: string,
		setParagraph: string,
		setBackground: string,
		vouchers: string[]
	) {
		this.page = setPage;
		this.header = setHeader;
		this.paragraph = setParagraph;
		this.background = setBackground;
		this.review = new ReviewActions();
		this.viewMode = 'light';
		this.voucherList = vouchers;
	}

	public setUser(login: LoginForm): void {
		// sets current user and display the dummy data to this class
		// this.user = {user}
	}

	public getVoucher(index: number) {
		// transfers voucher code to user
	}

	public getCartItems(): void {
		// return item list
	}

	public getItemUrl(id: number): string {
		// searches the local db for matching items and returns a dummy url
		return '';
	}

	public addToCart(id: number): void {
		// adds items to cart list
	}

	public toggleDarkMode(): void {
		if (this.viewMode === 'light') {
			this.viewMode = 'dark';
		} else {
			this.viewMode = 'light';
		}
	}

	public refreshWall(): void {
		// refreshes the constructor
		console.log('refreshing');
	}

	public checkout(): void {
		// sets to checkout page based on current user
	}
}
