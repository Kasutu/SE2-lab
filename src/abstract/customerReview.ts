import Comment from '../interface/comment';

export default abstract class CustomerReview {
	public abstract comment(comment: Comment): Comment;
	public abstract heartBtn(): string;
	public abstract likeBtn(): string;
	public abstract rating(score: number): string;
}
