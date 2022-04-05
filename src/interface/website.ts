import LoginForm from './loginForm';
import Checkout from './checkout';
import Listings from './listings';
import Dashboard from '../component/dashboard';

export default interface Website {
	page: Dashboard | Checkout | Listings;
	header: string;
	paragraph: string;
	background: string;
	form: LoginForm | undefined;

	getCartItems(): void;
	getItemUrl(id: number): string;
	addToCart(id: number): void;
	toggleDarkMode(): void;
	refreshWall(): void;
}
