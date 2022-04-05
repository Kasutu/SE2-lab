import Item from './item';

export default interface User {
	username: string;
	id: number;
	profilePicture: string;
	cartItems: Item[];
	coins: number;
	email: string;
	contactNumber: number;
}
