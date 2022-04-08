import HomePage from './component/homePage';
import VoucherList from './db/voucherList';
import LoginForm from './interface/loginForm';

const vouchers = new VoucherList();
const loginData: LoginForm = { username: 'gem', password: 'mweheheh' };

const homeScreen = new HomePage(
	'Localprice',
	'lorem lorem lorem lorem',
	'black',
	vouchers.fetch()
);

homeScreen.setUser(loginData);
console.log(homeScreen.getCartItems());
console.log(homeScreen.getItemUrl('cjE3d7-KVW'));
homeScreen.getVoucher(1);
homeScreen.getVoucher(0);
console.log(homeScreen.getUser()?.voucherCodes);
homeScreen.addToCart('cjE3d7-KVW');
console.log(homeScreen.getCartItems());
homeScreen.checkout();
console.log(homeScreen.getCurrentPage()?.getMeta().title);
