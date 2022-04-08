import WebPage from '../abstract/webPage';

export default class Listings extends WebPage {
	protected paragraph: string;
	protected title: string;
	constructor() {
		super();
		this.title = 'Listings page';
		this.paragraph = 'lorem lorem';
	}
}
