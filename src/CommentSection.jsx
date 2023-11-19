import "./CommentSection.css";

function CommentSection() {
  return (
    <div className="product--about-comment-section">
      <div className="comment-section-label">
        <a href="#" className="other-comments">
          مشاهده نظرات دیگران
        </a>
        <p className="comment-section-title">نظرات</p>
      </div>
      <div className="comment-section-boxs">
        <input
          type="text"
          placeholder="نام"
          name=""
          id=""
          className="comment-section-name comment-section-input"
        />
        <input
          type="email"
          placeholder="ایمیل"
          name=""
          id=""
          className="comment-section-email comment-section-input"
        />
        <input
          type="text"
          placeholder="نظر شما"
          name=""
          id=""
          className="comment-section-comment comment-section-input"
        />
        <button className="comment-section-button">ثبت نظر</button>
      </div>
    </div>
  );
}
export default CommentSection;
