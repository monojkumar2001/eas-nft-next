import Link from 'next/link';
import React from 'react'
import '../../styles/CategoriesItem.css';

const CategoriesItem = () => {
  return (
    <>
    <div className="categories_item_list">
        <h4>Categories</h4>
        {
            data.map((item,i)=>{
                return(
                    <div className="categories_item" key={i}>
                        <ul>
                            <li>
                                <Link href={`category/${item.slug}`}>
                                {item.categories}
                                </Link>
                            </li>
                        </ul>
                    </div>
                )
            })
        }
    </div>
    
    </>
  )
}

export default CategoriesItem;

const data=[
    {
        categories:'BlockChain',
        slug:"blockchain"
    },
    {
        categories:'NFTs',
        slug:"nfts"
    },
    {
        categories:'Partnerships',
        slug:"partnerships"
    },
    {
        categories:'Press Releases',
        slug:"press-releases"
    },
    {
        categories:'Real Estate',
        slug:"real-estate"
    },
]