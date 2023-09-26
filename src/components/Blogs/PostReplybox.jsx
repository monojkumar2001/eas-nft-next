"use client";
import "../../styles/PostCommentAnswer.css";
import Link from "next/link";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const PostReplyBox = () => {
  const [reply, setReply] = useState(false);
  const handleReply = () => {
    setReply(!reply);
  };
  return (
    <>
      <button className="replay-btn-items" onClick={handleReply}>
        Reply
        <span>
          <FaChevronRight />
        </span>
      </button>
      {reply && (
        <div className="post-comment-content mt-5">
          <form action="">
            <h4>
              Reply to Ar <span onClick={handleReply}> Cancel reply</span>{" "}
            </h4>
            <p>
              Your email address will not be published. Required fields are
              marked *
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
      )}
    </>
  );
};

export default PostReplyBox;
