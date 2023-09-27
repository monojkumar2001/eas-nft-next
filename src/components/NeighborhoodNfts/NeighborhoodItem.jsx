import React from 'react'
import { FaBitcoin, FaChurch, FaRegHospital, FaSchool } from 'react-icons/fa';
import {LuBitcoin} from 'react-icons/lu';
import {PiCatLight} from 'react-icons/pi';
import '../../styles/Charity-nft.css';
import '../../styles/NeighborhoodItem.css';
const NeighborhoodItem = () => {
  return (
    <>
      <div className="charity_distribution_right">
        <div className="row">
           {
            data.map((item, i)=>{
                return(
                    <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
                        <div className="charity_distribution_item d-flex align-items-start gap-2">
                            <div className="icons">
                                <span>{item.icon}</span>
                            </div>
                            <div className="charity_distribution_item_content">
                                <h4>{item.shortTitle}</h4>
                                <h2>{item.title}</h2>
                                <p>{item.dis}</p>
                            </div>
                        </div>
                    </div>
                )
            })
           }
        </div>
      </div>
    </>
  )
}

export default NeighborhoodItem;

const data=[
    {
        id:1,
        icon:<FaBitcoin/>,
        shortTitle:'A neighborhood nft is',
        title:"A plot of land that contains all individual Address NFTs within its boundaries",
        dis:`
        A neighborhood nft is
        A plot of land that contains all individual Address NFTs within its boundaries
        EAS Neighborhood NFTs represent the aggregate grouping of all individual Address NFTs from a unique postal code.`
    },
    {
        id:2,
        icon:<FaSchool/>,
        shortTitle:'When you own a Neighborhood NFT',
        title:"You earn 10% royalty on every new sale within your neighborhood",
        dis:'Owners of Neighborhood NFTs receive a 10% royalty on new mint sales and a 1% royalty on every trade of EAS Address & Charity NFTs within their neighborhood.'
    },
    {
        id:1,
        icon:<LuBitcoin/>,
        shortTitle:'act as a virtual landlord',
        title:"Sit back and 'collect rent'",
        dis:`
        act as a virtual landlord
        Sit back and 'collect rent'
        Neighborhood NFT royalties are payable monthly and have the ability to earn significant revenue without needing to be traded. With that said, if you wish to trade a Neighborhood NFT, all royalties will go to the new NFT owner.`
    },
    {
        id:1,
        icon:<FaChurch/>,
        shortTitle:'Quick ROI based on',
        title:"Pre-selected Postal Codes with high trading volume",
        dis:`EAS will only 'drop' or make available specific Neighborhood NFTs that already have a high trading volume. The more Address NFT sales and trades that happen within a Neighborhood NFTs postal code, the more revenue can be made.`
    },
]