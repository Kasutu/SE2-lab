import IFileSystem from '../interface/fileSystem';

export default class FileSystem<T> implements IFileSystem<T> {
	protected currentList: T[] | undefined;

	constructor(list?: T[]) {
		this.currentList = list;
	}

	fetch(id: string): T | undefined {
		if (this.currentList !== undefined) {
			for (let i = 0; i < this.currentList.length; i++) {
				let currentElement: T | any = this.currentList[i];

				if (currentElement['id'] === id) {
					return currentElement;
				}
			}

			throw 'NO DATA';
		}
	}
}
