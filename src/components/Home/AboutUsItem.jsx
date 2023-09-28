import React from 'react'
import Link  from "next/link";
import Image from 'next/image';

const AboutUsItem = () => {
  return (
    <>
       <section className="about_us cpb-6" >
        <div className="container">
          <div className="about_us_wrapper row">
            <div className="about_us_left_site col-lg-6 col-md-12">
              <span className="focus-color">About us</span>
              <h1 className="section-title-2 mb-4">
                EAS is mapping the world’s addresses as tradable NFTs.
              </h1>
              <p>
                With Ethereum Address Service (EAS), NFT owners generate
                royalties from the gamification of digital address collecting
                and the monetization of address-related data. We envision a
                future where every real-world address and point of interest has
                an associated EAS NFT. EAS serves as the platform to monetize
                and manage these new digital address rights and drive price
                appreciation for NFT buyers.
              </p>
              <Link href="/about" className="custom-btn learn-more-btn mt-4">
                learn more
              </Link>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about_us_right_sites">
                <div
                  className="about-1-img"
                 
                >
                  <Image width={500} height={625} src="/images/home/about-1.webp" alt="eas nft img"/>
                </div>
                <div
                  className="about-2-img"
                
                >
                  <Image  width={500} height={625} src="/images/home/about-2.png" alt="eas nft img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUsItem