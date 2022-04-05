import Comment from '../interface/comment';

export default abstract class CustomerReview {
	public abstract likeBtn(): string;
	public abstract heartBtn(): string;
	public abstract rating(score: number): string;
	public abstract comment(comment: Comment): Comment;
}
