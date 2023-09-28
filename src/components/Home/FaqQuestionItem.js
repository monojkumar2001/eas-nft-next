'use client';
import FAQ from 'react-faq-component';
import { Data } from "../../FaqData/FaqQuestionData";
import  Link  from "next/link";
import Image from "next/image";
const FaqQuestionItem = () => {
  const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
  };
  return (
    <>
      <section className="faq-question cpt-6">
        <div className="container">
          <div className="faq-question-wrapper row d-flex align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="faq-question-content">
                <div className="faq-question-content-header">
                  <span className="focus-color">
                    FREQUENTLY ASKED QUESTIONS
                  </span>
                  <h1 className="section-title-2 mb-5">
                    Most Popular Questions
                  </h1>
                </div>
          <div className="faq-conntes">
          <FAQ data={Data} styles={styles} />
          </div>
                <div className="faq-still-question">
                  <p>
                    Still have questions? Visit our{" "}
                    <span>
                      <Link href={"/docs"}>Knowledge Base</Link>{" "}
                    </span>{" "}
                    for more answers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="faq-question-img">
                <Image 
                width={400}
                height={400}
                  className="sfdfsd"
                  src="/images/home/faq-question-img.svg"
                  alt="eas faq img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqQuestionItem;
