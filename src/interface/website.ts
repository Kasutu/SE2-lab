export default interface Website {
	getCartItems(): void;
	getItemUrl(id: string): string | undefined;
	addToCart(id: string): void;
	toggleDarkMode(): void;
	refreshWall(): void;
}
