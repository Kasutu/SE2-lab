import Item from './item';

export default interface Checkout {
	selectedItems: Item[];
	paymentMethod: string;

	checkout: () => void;
}
