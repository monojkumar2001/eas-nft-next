import Link from "next/link";
import React from "react";
import "../../styles/BlogTagsItem.css";
const BlogTagsItem = () => {
  return (
    <>
      <p className="tag_item">
        {data.map((item, i) => {
          return (
            <span>
              <Link className="tag-btn" href={`tag/${item.slug}`}>
                {item.tag}
              </Link>
            </span>
          );
        })}
      </p>
    </>
  );
};

export default BlogTagsItem;

const data = [
  {
    tag: "BlockChain",
    slug: "blockchain",
  },
  {
    tag: "Celebrity",
    slug: "celebrity",
  },
  {
    tag: "Cinema",
    slug: "cinema",
  },
  {
    tag: "Decentralized",
    slug: "decentralized",
  },
  {
    tag: "Digital",
    slug: "digital",
  },
];
