import WebPage from '../abstract/webPage';

export default class Checkout extends WebPage {
	protected title: string;
	protected paragraph: string;

	constructor() {
		super();
		this.title = 'Checkout page';
		this.paragraph = 'lorem lorem';
	}

	public pay(): void {
		console.log('paid');
	}
}
