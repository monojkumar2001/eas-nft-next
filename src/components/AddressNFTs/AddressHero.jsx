import React from 'react'
import CetagoriesListNFTs from './CetagoriesListNFTs'

const AddressHero = () => {
  return (
    <>
      <section className="address-nfts">
        <div className="container">
          <div className="address-nfts-wrapper row">
            <div className="col-lg-7 col-md-12">
              <div className="address-nft-content">
                <span>ADDRESS NFTS</span>
                <h2 className="section-title">
                  Bring Real-World Addresses to Web3
                </h2>
                <p>
                  Do you want to own the digital rights to the iconic addresses
                  of your dreams? Any address in the world can be claimed as an
                  EAS NFT.
                </p>
                <p>
                  Claim your own Address NFT, and the address you choose can
                  unlock value in our digital world, including the participation
                  in the monetization of data that is created from the buying
                  and selling of your address in the secondary market.{" "}
                </p>
                <button className="claim-your-address-btn alt-custom-btn">
                  CLAIM YOUR OWN ADDRESS NFT
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="eas-address-nfts-list">
                <h4>EAS offers 15 categories of Address NFTs:</h4>
                <CetagoriesListNFTs />
              </div>
            </div>
          </div>
        </div>
        <div className="address-overlay"></div>
      </section>
    </>
  )
}

export default AddressHero