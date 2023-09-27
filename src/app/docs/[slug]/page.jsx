// "use client";

import { BsEmojiSmile } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import axios from "axios";
import { useParams } from "next/navigation";
import EasNftTypes from "@/components/KnowledgeBaseFaq/EasNftTypes";
import EasBanner from "@/components/KnowledgeBaseFaq/EasBanner";
import Link from "next/link";
import SocialMediaShareItem from "@/components/SocialMediaLink/SocialMediaShareItem";
import "../../../styles/knowledgeBase.css";
import EasQuestionItem from "@/components/KnowledgeBaseFaq/EasQuestionItem";
import { RiMailUnreadLine } from "react-icons/ri";


async function docs(slug) {
try {
  const response = await axios.get(`https://admin.accurentvc.com/api/page/faq/${slug}`);
  
  if (response.status === 200) {
    const singleData = response.data.data;
    console.log('data',singleData);
    return singleData;
  } else {
    console.error('Failed to retrieve data. Status:', response.status);
    // You can provide a more specific error message here
    throw new Error('Failed to retrieve data. Status: ' + response.status);
  }
} catch (error) {
  console.error('An error occurred:', error.message);
  throw error;
}
}


//   let data = await axios.get(`https://admin.accurentvc.com/api/page/${id}`);
//   console.log(data);
//   return data.data.data;
// }

const FaqQuestionDetails = async ({ params }) => {
  // console.log("id", id);
  let posts = await docs(params.slug);
  console.log(posts);


  return (
    <>
      {/* ================= EAS Banner ================== */}

      {/* <EasBanner title={'EAS Knowledge Base'} /> */}

      <div className="faq-question-details-wrapper cpy-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 ">
              {/* <EasNftTypes/> */}
              <EasQuestionItem posts={posts} />
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="faq-question-con-wrapper">
                <div className="faq-question-details-content">
                  <div className="faq-question-route mb-4 d-flex align-items-center gap-2">
                    <Link href={"/"}>
                      Home
                      <span>
                        <FaChevronRight />
                      </span>
                    </Link>
                    <Link href={"/docs"}>
                      Docs
                      <span>
                        <FaChevronRight />
                      </span>
                    </Link>
                    <Link href={`/docs/`} >
                              {/* {posts.faq.question} */}
                              <span>
                                <FaChevronRight />
                              </span>
                            </Link>
                {/* {
                  posts.map((res,i)=>{
                    return (
                      <>
                        {res.faq.map((item, i) => {
                          return (
                            <Link href={`/docs/${item.slug}`} key={i}>
                              {item.question}
                              <span>
                                <FaChevronRight />
                              </span>
                            </Link>
                          );
                        })}
                      </>
                    )
                  })
                } */}
                  
                    {/* <h3 className="faq-title">{detail.question}</h3> */}
                  </div>
                  {/* <h1>{detail.question}</h1> */}
                  {/* <p>{postsSingle?.answer}</p> */}
                </div>
                <div className="faq-question-details-footer mt-5">
                  <div className="faq-footer-item">
                    <h5 className="faq-sub-question-dis">Was this helpful?</h5>
                    <div className="faq-footer-emoji d-flex align-items-center gap-2">
                      <span>
                        <BsEmojiSmile />
                      </span>
                      <span>
                        <BsEmojiSmile />
                      </span>
                      <span>
                        <BsEmojiSmile />
                      </span>
                    </div>
                  </div>
                  <div className="faq-social-media-share-item mt-5 d-flex align-items-center gap-3">
                    <span className="faq-sub-question-dis">
                      Share EAS Article:
                    </span>
                    <div className="faq-footer-item-social">
                      <SocialMediaShareItem />
                    </div>
                  </div>
                  <div className="faq-help-item-con my-5 d-flex align-items-center justify-content-between">
                    <Link
                      href={"/contact"}
                      className="faq-help-btn  d-flex gap-2"
                    >
                      <span>
                        <RiMailUnreadLine />
                      </span>
                      <span>Still stuck? How can we help?</span>
                    </Link>
                    <div className="faq-help-right-item">
                      <span>Updated on April 12, 2023</span>
                    </div>
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
export default FaqQuestionDetails;
