interface PageMeta {
	title: string;
	paragraph: string;
}

export default abstract class WebPage {
	protected abstract paragraph: string;
	protected abstract title: string;
	public getMeta(): PageMeta {
		return {
			title: this.title,
			paragraph: this.paragraph,
		};
	}
}
