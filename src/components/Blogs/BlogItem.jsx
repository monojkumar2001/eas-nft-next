"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Loading from "../Loading/Loading";
import { BeatLoader } from "react-spinners";
import '../../styles/faq-blog-sub.css';
const BlogItem = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("api/blog").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="faq_blog_con">
        <h4>Latest Posts</h4>
        {data.length === 0 ? (
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
              <div className="faq_blog_item" key={i}>
                <div className="faq_blog_img">
                  <Image
                    width={70}
                    height={70}
                    src={"/images/use-cases/slider-1.jpg"}
                  />
                </div>
                <div className="faq_blog_content">
                  <span>date</span>
                  <Link href={`/news/${item.slug}`}>{item.title}</Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default BlogItem;
