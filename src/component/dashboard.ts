import WebPage from '../abstract/webPage';

export default class Dashboard extends WebPage {
	private currentUserId: string | undefined;
	protected paragraph: string;
	protected title: string;
	constructor() {
		super();
		this.currentUserId = undefined;
		this.title = 'User Dashboard';
		this.paragraph = 'lorem lorem';
	}
}
