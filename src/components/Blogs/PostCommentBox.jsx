import React from "react";
import "../../styles/PostCommentBox.css";
import Link from "next/link";
function PostCommentBox() {
  return (
    <>
      <div className="post-comment-content mt-5">
        <form action="">
          <h4 className="mb-3">Leave a Reply</h4>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="post-comment-input mt-4">
            <label htmlFor="">Comment *</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Your Comment"
            ></textarea>
          </div>
          <div className="post-comment-input">
            <label htmlFor="">Name *</label>
          <input type="email" placeholder="Your Name" />
          </div>
          <div className="post-comment-input">
            <label htmlFor="">Email*</label>
          <input type="email" placeholder="Your Email" />
          </div>

          <button className="custom-btn mt-3" type="submit">
            Post Comment
          </button>
        </form>
      </div>
    </>
  );
}

export default PostCommentBox;
