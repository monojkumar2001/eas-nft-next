import React from 'react'
import { FaChurch, FaRegHospital, FaSchool } from 'react-icons/fa';
import {PiCatLight} from 'react-icons/pi';
const CharityDistributionItem = () => {
  return (
    <>
      <div className="charity_distribution_right">
        <div className="row">
           {
            data.map((item, i)=>{
                return(
                    <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
                        <div className="charity_distribution_item d-flex align-items-start gap-3">
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

export default CharityDistributionItem;

const data=[
    {
        id:1,
        icon:<PiCatLight/>,
        shortTitle:'Zoos & Aquariums NFTs',
        title:"Animals Impact Fund",
        dis:'Supports nonprofits that protect, foster, and rehabilitate animals.'
    },
    {
        id:2,
        icon:<FaSchool/>,
        shortTitle:'Schools & Colleges NFTs',
        title:"Education Impact Fund",
        dis:'Supports charities that provide and foster high quality educational initiatives.'
    },
    {
        id:1,
        icon:<FaRegHospital/>,
        shortTitle:'Hospitals & Health Care NFTs',
        title:"Health & Medicine Impact Fund",
        dis:'Supports nonprofits that provide medical care and treatment, and fund medical research.'
    },
    {
        id:1,
        icon:<FaChurch/>,
        shortTitle:'Places of Worship NFTs',
        title:"Poverty & Housing Impact Fund",
        dis:'Supports nonprofits that are fighting poverty & building affordable housing opportunities.'
    },
]