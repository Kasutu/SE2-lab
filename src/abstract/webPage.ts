interface PageMeta {
	title: string;
	paragraph: string;
}

export default abstract class WebPage {
	protected abstract title: string;
	protected abstract paragraph: string;

	public getMeta(): PageMeta {
		return {
			title: this.title,
			paragraph: this.paragraph,
		};
	}
}
