
import Link  from 'next/link';
import '../../styles/layout/footer.css'
import Newsletter from "../Newsletter/Newsletter";
import Image from "next/image";
const Footer = () => {
  // const handleLinkClick = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-wrapper row ">
            
            <div className="col-lg-3 col-md-6">
              <div className="footer-item-fluid footer-items-content d-flex text-center algin-items-center justify-content-center flex-column">
                <Link href={"/"} className="eas-nft-img">
                  <Image width={200} height={75} src="/images/footer/footer-logo.svg" alt="logo img" />
                </Link>
                <p>
                  The only platform mapping the worlds addresses as tradable
                  NFTs
                </p>
                <div className="footer-opensea">
                  <Link
                   href={
                      "https://opensea.io/collection/ethereum-address-service"
                    }
                    target="_blank"
                  >
                    <img src="/images/footer/opensea.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-item-fluid-m">
              <div className="footer-item-fluid">
                {/* <div className="footer-link-item">
                  <Linkhref={"/address-nfts"} >Address NFTs</Linkhref=>
                </div> */}
                <div className="footer-link-item">
                  <Link href={"/nft-collection"} >NFT Collection</Link>
                </div>
                <div className="footer-link-item">
                  <Link href={"/my-nft-list"} >My NFT List</Link>
                </div>
                <div className="footer-link-item">
                  <Link href={"/marketplace"} >Marketplace</Link>
                </div>
                <div className="footer-link-item">
                  <Link href={"/nft-pricing"} >Pricing</Link>
                </div>
                <div className="footer-link-item">
                  <Link href={"/nft-use-cases"} >Use Cases</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-item-fluid-m">
              <div className="footer-item-fluid">
                <div className="footer-link-item">
                  <Link href={"/about"} >About</Link>
                </div>
                <div className="footer-link-item">
                  <Link href={"/contact"} >Contact</Link>
                </div>
                <div className="footer-link-item">
                  <Link href={"/news"} >News</Link>
                </div>
                <div className="footer-link-item">
                  <Link href={"/docs"} >FAQ & Support</Link>
                </div>
                <div className="footer-link-item">
                  <Link href={"/careers"} >Careers</Link>
                </div>
                <div className="footer-link-item">
                  <Link href={"/account"} >Account</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <Newsletter/>
            </div>
          </div>
        </div>
        <div className="footer-copy-right-wrapper mt-5">
          <div className="footer-terms-policy" >
            <Link href={"/privacy-policy"} >Privacy Policy</Link>
            <Link href={"/terms-and-conditions"} >Terms & Conditions</Link>
          </div>
          <p className="copy-text">
            Copyright © 2023 Ethereum Address Service (EAS). All Rights
            Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
