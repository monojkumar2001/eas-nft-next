
import EasQuestionItem from "@/components/KnowledgeBaseFaq/EasQuestionItem";
import SocialMediaShareItem from "@/components/SocialMediaLink/SocialMediaShareItem";
import axios from "axios";
import Link from "next/link";
import { BsEmojiSmile } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { RiMailUnreadLine } from "react-icons/ri";
import "../../../styles/knowledgeBase.css";
import EasBanner from "@/components/KnowledgeBaseFaq/EasBanner";
import Image from "next/image";
import FAQItem from "@/components/KnowledgeBaseFaq/FAQItem";

async function docs() {
  let data = await axios.get("https://admin.accurentvc.com/api/page");
  return data.data.data;
}

const DocsCategory = async ({params}) => {
  let posts = await docs();
  console.log(posts);

  return (
    <>
      <EasBanner title={params.id} />
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
                      EAS Knowledge Base
                      <span>
                        <FaChevronRight />
                      </span>
                    </Link>
                    <Link href={params.id}>
                      {params.id}
                      <span>
                        <FaChevronRight />
                      </span>
                    </Link>
                    {/* <h3 className="faq-title">{detail.question}</h3> */}
                  </div>
                  <h1>{params.id}</h1>
                  {/* <p>{detail.answer}</p> */}
                  {/* <div>
                    {posts.map((page) => (
                      <div key={page.id}>
                        <h2>{page.page}</h2>
                        <div className="knowledge-faq-list">
                          {page.faq.map((item, id) => (
                            <div className="knowledge-faq-list-item" key={id}>
                              <span>
                                <Image
                                  width={13}
                                  height={16}
                                  src="/images/knowledge-base/faq-file-icon.svg"
                                  alt="file icon"
                                />
                              </span>
                              <Link href={`/docs/${item.slug}`}>
                                {item.question}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div> */}
                  <FAQItem/>
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
                    <div className="faq-help-left-item">
                      <Link
                        href={"/contact"}
                        className="faq-help-btn d-flex gap-2"
                      >
                        <span>
                          <RiMailUnreadLine />
                        </span>
                        <span>Still stuck? How can we help?</span>
                      </Link>
                    </div>
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

export default DocsCategory;
