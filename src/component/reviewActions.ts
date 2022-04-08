import CustomerReview from '../abstract/customerReview';
import Comment from '../interface/comment';

export default class ReviewActions extends CustomerReview {
	private emoji: string[];

	constructor(emojiList?: string[]) {
		super();
		this.emoji = emojiList ?? ['❤', '👍', '⭐'];
	}

	public comment(input: Comment): Comment {
		let temp = {
			userId: input.userId,
			comment: input.comment,
		};

		return temp;
	}

	public heartBtn(): string {
		return this.emoji[0];
	}

	public likeBtn(): string {
		return this.emoji[1];
	}

	public rating(score: number): string {
		let rating = '';

		for (let i = 0; i < score; i++) {
			rating += this.emoji[2];
		}

		return rating;
	}
}
