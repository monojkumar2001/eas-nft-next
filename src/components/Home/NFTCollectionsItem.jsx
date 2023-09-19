import React from 'react'
import  Link  from 'next/link';
import { FaChevronRight } from "react-icons/fa";

const NFTCollectionsItem = (props) => {
  return (
    <>
    <div className="nft-collections-item d-flex align-items-start gap-3">
        <div className="nft-collection-icon">
            <span>{props.iconImg}</span>
        </div>
        <div className="nft-collection-item-content">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <Link href={props.link} className='nft-collection-learn-more-btn'>{props.subText}  {<FaChevronRight />}</Link>
        </div>
    </div>
    </>
  )
}

export default NFTCollectionsItem;