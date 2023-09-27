import CharityDistributionItem from "@/components/Carity-nfts/CharityDistributionItem";
import CharityTimeCount from "@/components/Carity-nfts/CharityTimeCount";
import Link from "next/link";
import React from "react";
import "../../styles/Charity-nft.css";
import { FaHeart } from "react-icons/fa";
import CharityNft from "@/components/Carity-nfts/CharityNft";
import CharityFaq from "@/components/Carity-nfts/CharityFaq";

const CharityNfts = () => {
  return (
    <>
      <main>
        {/* hero section */}
        <div className="asfd">
          <div className="charity_hero">
            <div className="background-overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <div className="charity_left_content">
                    <span className="sub-title">CHARITY NFTS</span>
                    <h1 className="section-title mb-3">
                      Doing Well by Doing Good
                    </h1>
                    <p>
                      With four categories of Charity NFTs, you can own the
                      rights to iconic addresses while helping those in need,
                      human or animal.
                    </p>
                    <div className="choose_form mt-3">
                      <p>Choose from:</p>
                      <ul>
                        <li>
                          {" "}
                          <span>
                            {" "}
                            <FaHeart />{" "}
                          </span>{" "}
                          Schools & Colleges
                        </li>
                        <li>
                          {" "}
                          <span>
                            {" "}
                            <FaHeart />{" "}
                          </span>
                          Hospitals & Health Care
                        </li>
                        <li>
                          {" "}
                          <span>
                            {" "}
                            <FaHeart />{" "}
                          </span>
                          Places of Worship
                        </li>
                        <li>
                          {" "}
                          <span>
                            {" "}
                            <FaHeart />{" "}
                          </span>
                          Zoos & Aquariums
                        </li>
                      </ul>
                    </div>
                    <p>
                      For all charity NFTs,{" "}
                      <b>
                        20% of gross initial sale proceeds and a 4% royalty on
                        all trading activity
                      </b>{" "}
                      will be donated to charity through our preferred crypto
                      donation vendor. You will truly be doing well by doing
                      good!
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <CharityTimeCount />
                </div>
              </div>
            </div>
          </div>
        </div>
{/* ======= Charity Nft ========= */}
<CharityNft/>
        {/*Charity Distribution */}
        <div className="charity_distribution cpy-6">
          <div className="container">
            <div className="charity_distribution_wrapper">
            <div className="charity_background-overlay"></div>
              <div className="charity_distribution_header">
                <span className="sub-title">CHARITY NFTS</span>
                <h1 className="section-title">Doing Well by Doing Good</h1>
                <p>
                  Through our partner,{" "}
                  <span>
                    {" "}
                    <Link
                      href={
                        "https://thegivingblock.com/partnership/ethereum-address-service-eas/"
                      }
                    >
                      The Giving Block
                    </Link>{" "}
                  </span>{" "}
                  , we have selected four charitable impact funds. Revenue from
                  Charity NFT sales will be spread evenly across hundreds of
                  non-profit organizations, diversifying your giving and
                  multiplying your impact.
                </p>
                <p>
                  Charitable distributions will be made on a monthly basis to
                  the following:
                </p>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <CharityDistributionItem />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ========== Charity-faq ======== */}
        <CharityFaq/>
      </main>
    </>
  );
};

export default CharityNfts;
