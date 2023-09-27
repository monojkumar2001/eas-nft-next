
import BlogTagsItem from '@/components/Blogs/BlogTagsItem'
import BlogsSubscribe from '@/components/Blogs/BlogsSubscribe'
import CategoriesItem from '@/components/Blogs/CategoriesItem'
import EasBanner from '@/components/KnowledgeBaseFaq/EasBanner'
import Link from 'next/link'
import React from 'react'
import "../../styles/news.css";
import { FaChevronRight } from 'react-icons/fa'

const layout = ({children}) => {
  return (
    <>
    {/* ================== Knowledge Base Banner section =================== */}
    <EasBanner title="News & Press Releases" />
      {/*  =========================== News page =================*/}

          <div className="news-page cpy-6">
        <div className="container">
          <div className="row">
            {children}
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

export default layout