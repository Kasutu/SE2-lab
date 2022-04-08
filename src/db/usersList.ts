import Item from '../interface/item';
import User from '../interface/user';
import ItemList from './itemsList';

// returns all available users
export default class UserList {
	protected cartItemList: Item[];
	protected contactList: string[];
	protected data: User[];
	protected emailList: string[];
	protected idList: string[];
	protected itemList: ItemList;
	protected nameList: string[];
	protected portraitList: string[];
	constructor() {
		this.data = [];
		this.nameList = [
			'gem',
			'Hugh Pearson',
			'Monte Holland',
			'Ellis Huber',
			'Milford Beck',
		];
		this.idList = [
			'C6a0ISRxxr',
			'9whP-1aOQY',
			'hemCwqukmg',
			'DXBS3e8f_E',
			'7lamwnXYtF',
		];
		this.portraitList = this.nameList;
		this.itemList = new ItemList();
		this.cartItemList = this.itemList.getItems();
		this.emailList = [
			'mcraigw@optonline.net',
			'cgreuter@verizon.net',
			'xtang@verizon.net',
			'sequin@outlook.com',
			'engelen@comcast.net',
		];
		this.contactList = [
			'(553) 852-2179',
			'(433) 656-5144',
			'(614) 834-5255',
			'(794) 518-1685',
			'(749) 444-0853',
			'(587) 889-9678',
			'(606) 678-0616',
			'(314) 717-1019',
		];

		this.makeList();
	}

	public getUsers(): User[] {
		return this.data;
	}

	public makeList(): User[] | void {
		const list: User[] = [];

		const fetchItems = (): Item[] => {
			const randomItems: Item[] = [];
			let qty: number = Math.floor(
				Math.random() * (this.cartItemList.length - 0 + 1) + 0
			);

			for (let i = 0; i < qty; i++) {
				let index: number = Math.floor(
					Math.random() * (this.cartItemList.length - 0 + 1) + 0
				);
				randomItems.push(this.cartItemList[index]);
			}

			return randomItems;
		};

		for (let i = 0; i < this.idList.length; i++) {
			let tempUser: User = {
				username: '',
				id: '',
				portrait: '',
				cartItems: [],
				coins: 0,
				email: '',
				contactNumber: '',
				voucherCodes: [],
			};

			tempUser.username = this.nameList[i];
			tempUser.id = this.idList[i];
			tempUser.portrait = this.portraitList[i] + '.png';
			tempUser.cartItems = fetchItems();
			tempUser.coins = Math.floor(Math.random() * (100 - 0 + 1) + 0);
			tempUser.email = this.emailList[i];
			tempUser.contactNumber = this.contactList[i];

			list.push(tempUser);
		}

		this.data = list;
	}
}
