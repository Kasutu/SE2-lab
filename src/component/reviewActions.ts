import CustomerReview from '../abstract/customerReview';
import Comment from '../interface/comment';

export default class ReviewActions extends CustomerReview {
	emoji: string[];

	constructor(emojiList?: string[]) {
		super();
		this.emoji = emojiList ?? ['❤', '👍', '⭐'];
	}

	public heartBtn(): string {
		return this.emoji[0];
	}

	public rating(score: number): string {
		let rating = '';

		for (let i = 0; i < score; i++) {
			rating += this.emoji[2];
		}

		return rating;
	}

	public comment(input: Comment): Comment {
		let temp = {
			userId: input.userId,
			comment: input.comment,
		};

		return temp;
	}

	public likeBtn(): string {
		return this.emoji[1];
	}
}
