import Item from './item';

export default interface User {
	username: string;
	id: string;
	portrait: string;
	cartItems: Item[];
	coins: number;
	email: string;
	contactNumber: string;
	voucherCodes: string[];
}
