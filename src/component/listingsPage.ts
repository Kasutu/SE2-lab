import WebPage from '../abstract/webPage';

export default class Listings extends WebPage {
	protected title: string;
	protected paragraph: string;

	constructor() {
		super();
		this.title = 'Listings page';
		this.paragraph = 'lorem lorem';
	}
}
