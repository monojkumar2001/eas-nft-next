import BlogTagsItem from '@/components/Blogs/BlogTagsItem'
import BlogsSubscribe from '@/components/Blogs/BlogsSubscribe'
import CategoriesItem from '@/components/Blogs/CategoriesItem'
import EasBanner from '@/components/KnowledgeBaseFaq/EasBanner'
import Link from 'next/link'
import React from 'react'
import "../../../styles/news.css";
import { FaChevronRight } from 'react-icons/fa'

const CategorySingle = () => {
  return (
    <>

      {/* ================== Knowledge Base Banner section =================== */}
      <EasBanner title="News & Press Releases" />
      {/*  =========================== News page =================*/}

          <div className="news-page cpy-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
            <h3 className='mb-5 text-center tag-title-item'>Category: <span>Blockchain</span></h3>
              <div className="news-container">
                {/* {data.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  minHeight: "10vh",
                
                  
                }}
              >
                <BeatLoader color={"#123abc"} loading={true} size={30} />
              </div>
            ) : (
              data.map((item, i) => {
                return (
                  <div className="news-post" key={i}>
                    <div className="new-img">
                      <Image src={item.main_image} />
                    </div>
                    <div className="news-about-content">
                      <Link to={`/news/${item.slug}`}>{item.title}</Link>
                      <div className="news-date d-flex align-items-center gap-2">
                        <span>{item.created_date.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        <span>{item.created_date}</span>
                        <span className="curcle-item"></span>
                        <span>{item.author}</span>
                      </div>
                      <p
                        className="dis"
                        dangerouslySetInnerHTML={{
                          __html: item.description.substring(0, 100),
                        }}
                      ></p>
                    </div>
                  </div>
                );
              })
            )} */}
                <div className="news-post">
                  {/* <div className="new-img">
                    <Image
                      width={416}
                      height={218}
                      src="/images/blog/1.webp"
                      alt="blog image"
                    />
                  </div> */}
                  <div className="news-about-content">
                    <Link className="category-btn" href={`category/blockchain`}>
                      BlockChain
                    </Link>
                    <Link href={``}>
                      EAS Launches Platform to Map the World’s Addresses as
                      NFT-based Digital Rights
                    </Link>
                    <div className="news-date d-flex align-items-center gap-2">
                      {/* <span>{item.created_date.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span> */}
                      <span>JUNE 5, 2023</span>
                      <span className="curcle-item"></span>
                      <span>BY LAURA</span>
                    </div>
                    <p>
                      Ethereum Address Service (“EAS”) is thrilled to announce
                      the launch of its ground-breaking platform where the
                      world’s addresses are being mapped as NFT-based digital
                      rights. EAS NFTs are the keys to unlock value in the
                      digital world. With EAS, NFT collectors participate in the
                      monetization of exclusive content that is associated with
                      an individual address. William Corbett, Founder of EAS,
                      said, “We envision a future where every real-world address
                      and point of interest has an associated EAS NFT....
                    </p>

                    <div className="read_more">
                      <Link href={"/"}>
                        READ MORE{" "}
                        <span>
                          <FaChevronRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              {/* <BlogItem /> */}
              <CategoriesItem />
              <BlogTagsItem />
              <BlogsSubscribe />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategorySingle