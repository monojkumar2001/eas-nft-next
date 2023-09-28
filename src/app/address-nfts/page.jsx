import { openGraphImage } from "@/app/shared-metadata";
import CetagoriesListNFTs from "@/components/AddressNFTs/CetagoriesListNFTs";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import "../../styles/addressnft.css";
import Image from "next/image";
import AddressHero from "@/components/AddressNFTs/AddressHero";
import AddressNft from "@/components/AddressNFTs/AddressNft";

export const metadata = {
  title: "Address NFTs - Bringing Real-World Addresses to Web3 | EAS",
  description: "Address NFTs are digital address rights that provide NFT buyers & property owners a way to participate in monetization of data associated with an address.",
  openGraph: {
    title: 'Address NFTs - Bringing Real-World Addresses to Web3 | EAS',
    ...openGraphImage,
    description: 'Address NFTs are digital address rights that provide NFT buyers & property owners a way to participate in monetization of data associated with an address.',
  },
  icons: {
    icon: ["/images/logo.png"],
  },
};

const AddressNFTsPage = () => {
  return (
    <>
    
<AddressHero/>
{/* ============ Address Nft ============ */}
<AddressNft />

      {/* ========================= WHAT ARE ADDRESS NFTS? ========================= */}

      <section className="digital-address-nft cpy-6">
        <div className="container">
          <div
            className="digital-address-nft-wrapper row d-flex align-items-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="col-lg-7 col-md-12">
              <div className="digital-address-nft-content">
                <span className="sub-title">Owning Digital Rights</span>
                <h2 className="address-title">What are Address NFTs?</h2>
                <div className="row mt-4">
                  <div className="col-lg-6 col-md-12">
                    <p className="address-details">
                      Ethereum Address Service (EAS) NFTs are digital address
                      rights that provide NFT buyers a structure to participate
                      in the monetization of the data that is created from the
                      buying and selling of digital addresses. EAS is developing{" "}
                      <span>
                        <Link href={"/"}>use cases</Link>
                      </span>{" "}
                      for the aggregation and commercialization of this unique
                      data which include distribution to real estate developers
                      and owners, investors, brokers, appraisers, lenders,
                      consumer behavior and data analysts, and more.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <p className="address-details">
                      For geolocation and mapping identification purposes, your
                      Address NFT is converted to a digital format with a unique
                      Google Plus Code and GPS coordinate identifier.
                    </p>
                    <p className="address-details">
                      Your Address NFT is instantly tradable on
                      <span>
                        <Link href={""}>OpenSea</Link>
                      </span>{" "}
                      or the secondary market of your choice. As the EAS
                      platform grows its community of Address NFT owners, EAS
                      NFTs will naturally appreciate in value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="digital-address-right-item">
                <div className="digital-makers-img">
                  <Image
                    width={530}
                    height={300}
                    src="/images/addressnfts/digital-map-markers.jpg"
                    alt="What are Address NFTs?"
                  />
                </div>
                <p className="mt-3">
                  Each custom Address NFT you claim is a flat price of 0.02 ETH
                  + gas.
                </p>
                <Link href={"/nft-pricing"} className="nft-pricing-nft-link">
                  View Full NFT pricing guide{" "}
                  <span>
                    <FaChevronRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddressNFTsPage;
