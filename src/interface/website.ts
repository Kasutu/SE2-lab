export default interface Website {
	getCartItems(): void;
	getItemUrl(id: number): string;
	addToCart(id: number): void;
	toggleDarkMode(): void;
	refreshWall(): void;
}
