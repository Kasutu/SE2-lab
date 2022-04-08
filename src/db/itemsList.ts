import Item from '../interface/item';

// returns a list of available items
export default class ItemList {
	protected data: Item[];
	protected descList: string[];
	protected idList: string[];
	protected nameList: string[];
	protected urlList: string[];
	constructor() {
		this.data = [];
		this.nameList = [
			'Pair of glasses',
			'Chocolate',
			'Sketch pad',
			'Chalk',
			'Hand bag',
		];
		this.idList = [
			'Tok9dh3lbu',
			'cjE3d7-KVW',
			'wPe5URoSSz',
			'E6-7ZW6kd8',
			'OrG65RePU4',
		];
		this.urlList = [
			'https://blade.example.com/',
			'https://www.example.com/?bear=books',
			'http://birthday.example.com/bikes/addition',
			'http://example.edu/',
			'http://example.com/bomb.php',
		];
		this.descList = ['quirm', 'pruste', 'ig', 'belleciarcle', 'shilighten'];

		this.makeList();
	}

	public getItems(): Item[] {
		return this.data;
	}

	public makeList(): Item[] | void {
		let list: Item[] = [];

		for (let i = 0; i < this.idList.length; i++) {
			let tempItem: Item = {
				id: '',
				name: '',
				url: '',
				description: '',
			};

			tempItem.id = this.idList[i];
			tempItem.name = this.nameList[i];
			tempItem.url = this.urlList[i];
			tempItem.description = this.descList[i];
			list.push(tempItem);
		}

		this.data = list;
	}
}
