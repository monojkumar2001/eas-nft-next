"use client";
import React, { useState } from "react";
import "../../styles/CharityFaq.css";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
const CharityFaq = () => {
  const [faq, setFaq] = useState(0);
  const handleFaq = (index) => {
    setFaq(index);
  };
  return (
    <>
      <div className="charity_faq_con cpb-6">
        <div className="container">
          <div className="charity_faq_wrapper d-flex flex-column gap-3">
            <div className="faq_question_item">
              <div
                className={faq === 1 ? "faq_item_box active" : "faq_item_box"}
                onClick={() => {
                  if (faq === 1) {
                    handleFaq(0);
                  } else handleFaq(1);
                }}
              >
                <div className="faq_question_title d-flex align-items-center justify-content-between">
                  <h2>Which nonprofits are in the Animals Impact Fund?</h2>
                  <span>
                    <IoIosArrowDown />{" "}
                  </span>
                </div>
              </div>
              <div
                className={
                  faq === 1 ? "faq_item_answer active" : "faq_item_answer"
                }
              >
                <div className="faq_content_item">
                  <h5>
                    Charity NFTs in our ‘Zoos & Aquariums’ category support the
                    following nonprofits in the{" "}
                    <span>
                      <Link
                        target="_blank"
                        href={
                          "https://thegivingblock.com/impact-index-funds/animals/"
                        }
                      >
                        Animal Impact Fund:
                      </Link>{" "}
                    </span>
                  </h5>
                  <div className="row">
                    {faqData1.map((item, i) => {
                      return (
                        <div
                          className="col-lg-3 col-md-4 col-sm-6 col-6"
                          key={i}
                        >
                          <ul className="faq_items_list">
                            <li>{item.title}</li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="faq_question_item">
              <div
                className={faq === 2 ? "faq_item_box active" : "faq_item_box"}
                onClick={() => {
                  if (faq === 2) {
                    handleFaq(0);
                  } else handleFaq(2);
                }}
              >
                <div className="faq_question_title d-flex align-items-center justify-content-between">
                  <h2>Which nonprofits are in the Health & Medicine Impact Fund?</h2>
                  <span>
                    <IoIosArrowDown />{" "}
                  </span>
                </div>
              </div>
              <div
                className={
                  faq === 2 ? "faq_item_answer active" : "faq_item_answer"
                }
              >
                <div className="faq_content_item">
                  <h5>
                  Charity NFTs in our ‘Hospitals & Health Care’ category support the following nonprofits in the{" "} <span>
                      <Link
                        target="_blank"
                        href={
                          "https://thegivingblock.com/impact-index-funds/health-medicine/"
                        }
                      >
                         Health & Medicine Impact Index Fund:
                      </Link>{" "}
                    </span>
                  </h5>
                  <div className="row">
                    {faqData2.map((item, i) => {
                      return (
                        <div
                          className="col-lg-3 col-md-4 col-sm-6 col-6"
                          key={i}
                        >
                          <ul className="faq_items_list">
                            <li>{item.title}</li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="faq_question_item">
              <div
                className={faq === 3 ? "faq_item_box active" : "faq_item_box"}
                onClick={() => {
                  if (faq === 3) {
                    handleFaq(0);
                  } else handleFaq(3);
                }}
              >
                <div className="faq_question_title d-flex align-items-center justify-content-between">
                  <h2>Which nonprofits are in the Education Impact Fund?</h2>
                  <span>
                    <IoIosArrowDown />{" "}
                  </span>
                </div>
              </div>
              <div
                className={
                  faq === 3 ? "faq_item_answer active" : "faq_item_answer"
                }
              >
                <div className="faq_content_item">
                  <h5>
                  Charity NFTs in our ‘Schools & Colleges’ category support the following nonprofits in the{" "} 
                    <span>
                      <Link
                        href={
                          "https://thegivingblock.com/impact-index-funds/education/"
                        }
                        target="_blank"
                      >
                        Education Impact Index Fund:
                      </Link>{" "}
                    </span>
                  </h5>
                  <div className="row">
                    {faqData3.map((item, i) => {
                      return (
                        <div
                          className="col-lg-3 col-md-4 col-sm-6 col-6"
                          key={i}
                        >
                          <ul className="faq_items_list">
                            <li>{item.title}</li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="faq_question_item">
              <div
                className={faq === 4 ? "faq_item_box active" : "faq_item_box"}
                onClick={() => {
                  if (faq === 4) {
                    handleFaq(0);
                  } else handleFaq(4);
                }}
              >
                <div className="faq_question_title d-flex align-items-center justify-content-between">
                  <h2>Which nonprofits are in the Poverty & Housing Impact Fund?</h2>
                  <span>
                    <IoIosArrowDown />{" "}
                  </span>
                </div>
              </div>
              <div
                className={
                  faq === 4 ? "faq_item_answer active" : "faq_item_answer"
                }
              >
                <div className="faq_content_item">
                  <h5>
                  Charity NFTs in our ‘Places of Worship’ category support the following nonprofits in the{" "}
                    <span>
                      <Link
                        href={
                          "https://thegivingblock.com/impact-index-funds/poverty-housing/"
                        }
                      >
                       Poverty & Housing Impact Index Fund:
                      </Link>{" "}
                    </span>
                  </h5>
                  <div className="row">
                    {faqData4.map((item, i) => {
                      return (
                        <div
                          className="col-lg-3 col-md-4 col-sm-6 col-6"
                          key={i}
                        >
                          <ul className="faq_items_list">
                            <li>{item.title}</li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharityFaq;

const faqData1 = [
  {
    title: "1300 KOALAZ",
  },
  { title: "1300 KOALAZ" },
  { title: "1300 KOALAZ" },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "Neighborhood Cats",
  },
];
const faqData2 = [
  {
    title: "1300 KOALAZ",
  },
  { title: "1300 KOALAZ" },
  { title: "1300 KOALAZ" },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "Neighborhood Cats",
  },
];
const faqData3 = [
  {
    title: "1300 KOALAZ",
  },
  { title: "1300 KOALAZ" },
  { title: "1300 KOALAZ" },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "Neighborhood Cats",
  },
];
const faqData4 = [
  {
    title: "1300 KOALAZ",
  },
  { title: "1300 KOALAZ" },
  { title: "1300 KOALAZ" },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "1300 KOALAZ",
  },
  {
    title: "Neighborhood Cats",
  },
];
