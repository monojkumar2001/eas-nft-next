'use client';

// import { useParams } from 'react-router-dom'
import "../../../styles/Careers.css";
import { BiMap, BiTime } from "react-icons/bi";
import { CareerDataDetails } from '../../../CareersData/CareersDetailsData';
import Link from 'next/link';
import EasBanner from '@/components/KnowledgeBaseFaq/EasBanner';
const CareersPageDetails = ({params}) => {
    const {slug}=params;
    const singleData=CareerDataDetails.find((res)=>res.slug===slug);
    if (!singleData) {
        return <div>Item not found</div>;
      }

  return (
    <>
     {/* ============ Banner ========== */}
     <EasBanner title={singleData.title} />

     <div className="careers-page-details cpy-6">
        <div className="container">
            <div className="careers-page-details-wrapper">
                 <div className="job-listing-header">
                    <div
                      className="job-title-group d-flex align-items-center gap-3"
                    >
                      <h2>{singleData.title}
                      
                      <span className="job-featured">
                        <img src="/images/careers/star.png" alt="" />
                        <span>Featured</span>
                      </span>
                      </h2>
                     
                    </div>
                  </div>
                 <div className="job-tags">
                    <div className="job-tag">
                      <span>
                        <BiTime />
                      </span>
                      <p className="job-tag-name">{singleData.date}</p>
                    </div>
                    <div className="job-tag">
                      <span>
                        <BiMap />
                      </span>
                      <p className="job-tag-name">{singleData.job}</p>
                    </div>
                    <div className="job-tag">
                      <img src="/images/careers/job-type.svg" alt="" />
                      <p className="job-tag-name">{singleData.status}</p>
                    </div>
                  </div>
                <p><b>Experience:</b> 8 years of related experience</p>
                <div className="careers-description">
                    <p>{singleData.dis1}</p>
                    <p>{singleData.dis2}</p>
                    <ul>
                        <li>
                      <p> <b>{singleData.itemT1}</b>
                        {singleData.itemList1}</p>
                        </li>
                        <li>
                        <p> <b>{singleData.itemT2}</b>
                        {singleData.itemList2}</p>
                        </li>
                        <li>
                        <p> <b>{singleData.itemT3}</b>
                        {singleData.itemList3}</p>
                        </li>
                        <li>
                        <p> <b>{singleData.itemT4}</b>
                        {singleData.itemList4}</p>
                        </li>
                    </ul>
                    <p>{singleData.dis3}</p>
                    <p>{singleData.dis4}</p>
                    <p>{singleData.dis5}</p>
                    <p>{singleData.dis6}</p>
                    <button className='job-apply-btn custom-btn'>Apply Now</button>
                    <div className='d-flex align-items-center careers-link-item'>
                    <p>Apply now on Smart Recruiters: </p>
                    <span><Link href={'/https://careers.smartrecruiters.com/EthereumAddressServiceEAS'}>https://careers.smartrecruiters.com/EthereumAddressServiceEAS</Link></span>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default CareersPageDetails;

