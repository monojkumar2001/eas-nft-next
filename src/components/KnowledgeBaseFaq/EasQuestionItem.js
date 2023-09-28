"use client";
import Link from "next/link";
import React, { useState } from "react";
import "../../styles/eas-qestion-item.css";
import Image from "next/image";

const EasQuestionItem = ({ posts }) => {

  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const item = localStorage.getItem('key')
  }

  const [active, setActive] = useState(null);
  const toggleActive = (index) => {
    if (active === index) {
      // If the clicked question is already active, close it
      setActive(null);
    } else {
      // Otherwise, open the clicked question
      setActive(index);
    }
  };
  return (
    <div className="faq_question_cons">
      {posts.map((res, i) => {
        return (
          <div className="faq-details-question" key={i}>
            <div
              className={
                active === res.id
                  ? "faq_question_item_list active"
                  : "faq_question_item_list"
              }
              onClick={() => {
                toggleActive(res.id);
              }}
            >
              <div className="knowledge-faq-item-header d-flex align-items-center justify-content-between">
                <div className="knowledge-faq-item-left d-flex align-item-center gap-3">
                  <span>
                    <Image width={24} height={27}
                      src="/images/knowledge-base/knowledge-file-icon.svg"
                      alt="nft icon"
                    />
                  </span>
                  <h3 className="faq-title-item">{res.page}</h3>
                </div>
                <div className="knowledge-faq-item-right">
                  <span>{res.faq.length}</span>
                </div>
              </div>
            </div>

            <div
              className={
                active === res.id
                  ? "faq_question_list_content active"
                  : "faq_question_list_content"
              }
            >
              {res.faq.map((item, id) => {
                return (
                  <div className="knowledge-faq-list-item" key={id}>
                    <span><Image width={13} height={16}  src='/images/knowledge-base/faq-file-icon.svg' alt="file icon" /></span>
                    <Link href={`/docs/${item.slug}`}>{item.question}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EasQuestionItem;
