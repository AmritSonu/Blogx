import Styles from "./ViewBlogBox.module.css";
export function CommentSection() {
  return (
    <div className={Styles.commentSection}>
      <h2 className={Styles.commentSectionTitle}>Comments</h2>
      <div className={Styles.commentList}>
        {/* Comment items go here */}
        <div className={Styles.comment}>
          <div className={Styles.commentAuthor}>John Doe</div>
          <div className={Styles.commentContent}>Great article!</div>
        </div>
        {/* Add more comments as needed */}
      </div>
      <div className={Styles.commentForm}>
        {/* Comment form goes here */}
        <textarea
          placeholder="Write your comment..."
          className={Styles.commentInput}
        ></textarea>
        <button className={Styles.commentButton}>Submit Comment</button>
      </div>
    </div>
  );
}
