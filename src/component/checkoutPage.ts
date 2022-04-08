import WebPage from '../abstract/webPage';

export default class Checkout extends WebPage {
	protected paragraph: string;
	protected title: string;
	constructor() {
		super();
		this.title = 'Checkout page';
		this.paragraph = 'lorem lorem';
	}

	public pay(): void {
		console.log('paid');
	}
}
