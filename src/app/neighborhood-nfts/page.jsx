import NeighborhoodHero from "@/components/NeighborhoodNfts/NeighborhoodHero";
import NeighborhoodItem from "@/components/NeighborhoodNfts/NeighborhoodItem";
import { openGraphImage } from "@/app/shared-metadata";
import React from "react";
import "../../styles/NeighborhoodItem.css";
import NeighborhoodNft from "@/components/NeighborhoodNfts/NeighborhoodNft";
export const metadata = {
  title: "Neighborhood NFTs - Earn Real Income by Owning Digital Land",
  description:
    "Neighborhood NFT owners become NFT landlords, earning a 1% royalty on every Address NFT sold or traded within the neighborhood's postal code.",
  openGraph: {
    title: "Neighborhood NFTs - Earn Real Income by Owning Digital Land",
    ...openGraphImage,
    description:
      "Neighborhood NFT owners become NFT landlords, earning a 1% royalty on every Address NFT sold or traded within the neighborhood's postal code.",
  },
  icons: {
    icon: ["/images/logo.png"],
  },
};
const NeighborhoodNfts = () => {
  return (
    <>
      <main>
        {/* hero */}
        <NeighborhoodHero />
        {/* Neighborhood Nft */}

        <NeighborhoodNft />

        {/* Neighborhood Invest  */}
        <div className="neighborhood_invest cpy-6">
          <div className="container">
            <div className="neighborhood_invest_wrapper">
              <div className="neighborhood_invest_header">
                <span className="sub-title">BECOME AN NFT LANDLORD</span>
                <h1 className="section-title">
                  {" "}
                  Why invest in a neighborhood NFT{" "}
                </h1>
              </div>
              <NeighborhoodItem />
            </div>
          </div>
        </div>

        {/* ====  */}
      </main>
    </>
  );
};

export default NeighborhoodNfts;
