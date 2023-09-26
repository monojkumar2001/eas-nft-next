import BlogItem from "@/components/Blogs/BlogItem";
import BlogsSubscribe from "@/components/Blogs/BlogsSubscribe";
import EasBanner from "@/components/KnowledgeBaseFaq/EasBanner";
import axios from "axios";
import "../../styles/knowledgeBase.css";
import '../../styles/PopularQuestion.css'
import EasNftTypes from "@/components/KnowledgeBaseFaq/EasNftTypes";
import Link from "next/link";
import Image from "next/image";
import PopularQuestion from "@/components/KnowledgeBaseFaq/PopularQuestion";
import SocialMediaShareItem from "@/components/SocialMediaLink/SocialMediaShareItem";
async function docs() {
  let data = await axios.get("https://admin.accurentvc.com/api/page");
  return data.data.data;
}

const page = async () => {
  let posts = await docs();
  console.log(posts);

  return (
    <div>
      {/* ================== Knowledge Base Banner section =================== */}
      <EasBanner title="EAS Knowledge Base" />
      {/* =================== KnowLedge Base Faq =================== */}
      <div className="knowledge-base-faq cpy-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div
                className="knowledge-base-faq-wrapper"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="knowledge-base-search-item">
                  <h4>Welcome to where the learning happens</h4>
                  <div className="knowledge-base-search-input-fluid mt-4 d-flex align-items-center gap-3">
                    <span>
                      <img
                        src="/images/knowledge-base/search-icon.svg"
                        alt=""
                      />
                    </span>
                    <input type="text" placeholder="Search..." />
                  </div>
                </div>

                <div className="faq_all_question">
                  <div className="knowledge-base-faq-items row cpt-7">
                    {posts.map((res) => (
                      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="knowledge-faq-item-card">
                          <div className="knowledge-faq-item-header d-flex align-items-center justify-content-between">
                            <div className="knowledge-faq-item-left d-flex align-item-center gap-4">
                              <span>
                                <Image
                                  width={24}
                                  height={27}
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
                          <div className="knowledge-faq-list-items mt-4">
                            {res.faq.map((item, id) => {
                              return (
                                <div
                                  className="knowledge-faq-list-item"
                                  key={id}
                                >
                                  <span>
                                    {/* <img src={item.fileIcon} alt="" /> */}
                                  </span>
                                  <Link href={`/docs/${item.slug}`}>
                                    {item.question}
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                          <Link
                            href={`/docs-category`}
                            className="knowledge-explore-more-btn"
                          >
                            Explore more
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="faq_popular_question">
                <h2>Frequently Asked Questions</h2>
                <PopularQuestion />
              </div>
              <div className="faq-footer-item-social social-media-popular">
                <SocialMediaShareItem />
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <BlogItem />
              <BlogsSubscribe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
