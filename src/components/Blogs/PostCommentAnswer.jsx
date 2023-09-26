import React from "react";
import "../../styles/PostCommentBox.css";
import "../../styles/PostCommentAnswer.css";
import Image from "next/image";
import PostReplyBox from "./PostReplybox";
const PostCommentAnswer = () => {
  return (
    <>
      <div className="post-comment-answers mt-5">
        <h4>
          Comments <span>(00)</span>
        </h4>
        <div className="post-comment-box-item w-100">
          <div className="post-comment-answer-item d-flex justify-content-start align-items-start w-100 gap-2">
            <div className="comment-img">
              <Image
                width={50}
                height={50}
                src="/images/dashboard/user-img.png"
                alt="profile img"
              />
            </div>
            <div className="post-comment-content-item">
              <h5>bloombiz</h5>
              <span>June 5, 2023 at 1:52 pm</span>
              <p>good article</p>
              <PostReplyBox />
            </div>
        
          </div>
     
        </div>
      </div>
    </>
  );
};

export default PostCommentAnswer;
