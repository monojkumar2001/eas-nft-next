'use client';
import React from "react";
import { useState, useEffect } from "react";
import "../../styles/myCollection.css";
import Web3 from "web3";
import { fetchJsonFromIpfs } from "../utils";
import {
  contact_address,
  contact_ABI,
  MarketPlace_Address,
  Market_ABI,
} from "../config";
import Loading from "@/components/Loading/Loading";
import SingleNft from "@/components/Collection/SingleNft";


const Marketplace = () => {
  const web3 = new Web3("https://rpc-mumbai.maticvigil.com");
  const [loading, setLoading] = useState(true);
  const [activeNfts, setActiveNfts] = useState("All"); // Default to 'All'
  const [NFTs, setNFTs] = useState([]);
  const [uniqueData, setUniqueData] = useState([]);
  const [visibleCards, setVisibleCards] = useState(8);

  const toggleNfts = (categoryName) => {
    setActiveNfts(categoryName);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const filterByStandardType = (nfts, standardType) => {
    if (standardType === "All") {
      return nfts;
    }
    return nfts.filter((nft) =>
      nft.data.attributes.some(
        (attr) =>
          attr.trait_type === "address type" && attr.value === standardType
      )
    );
  };

  console.log('NFTs', NFTs);

  const fetchData = async () => {
    try {
      const marketContract = new web3.eth.Contract(
        Market_ABI,
        MarketPlace_Address
      );

      const fetchMarketItems = await marketContract.methods
        .fetchMarketItems()
        .call();

      const items = fetchMarketItems.map((nft) => {
        return nft.tokenId;
      });

      const Contract = new web3.eth.Contract(contact_ABI, contact_address);
      const NFTs = [];
      for (const id of items) {
        const tokenUrl = await Contract.methods.tokenURI(id.toString()).call();
        const nfts = await fetchJsonFromIpfs(tokenUrl);

        const data = { data: nfts, tokenID: id };

        NFTs.push(data);
      }
      setNFTs(NFTs);
      setUniqueData(NFTs); // Initially, set uniqueData to all NFTs
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 8);
  };
  const handleFilterClick = (standardType) => {
    toggleNfts(standardType); // Activate the selected category
    const filteredNFTs = filterByStandardType(NFTs, standardType);
    setUniqueData(filteredNFTs);
  };
  if (loading) {
    return (
      <Loading/>
    );
  }
  return (
    <>
       <div className="my-nfts-wrapper my-collection-page">
          <div className="container">
            <div className="dashboard-header-item d-flex align-items-center gap-3">
              <div className="dashboard-con-btn d-flex align-items-center gap-2">
                <button
                  className={`my-nft-btn ${
                    activeNfts === "All" ? "active-my-nft-btn" : ""
                  }`}
                  onClick={() => handleFilterClick("All")}
                >
                  ALL
                </button>
                <button
                  className={`my-nft-btn ${
                    activeNfts === "Standard" ? "active-my-nft-btn" : ""
                  }`}
                  onClick={() => handleFilterClick("Standard")}
                >
                  Standard
                </button>
                <button
                  className={`my-nft-btn ${
                    activeNfts === "Neighborhood" ? "active-my-nft-btn" : ""
                  }`}
                  onClick={() => handleFilterClick("Neighborhood")}
                >
                  Neighborhood
                </button>
                <button
                  className={`my-nft-btn ${
                    activeNfts === "Gold" ? "active-my-nft-btn" : ""
                  }`}
                  onClick={() => handleFilterClick("Gold")}
                >
                  Gold
                </button>
                <button
                  className={`my-nft-btn ${
                    activeNfts === "Platinum" ? "active-my-nft-btn" : ""
                  }`}
                  onClick={() => handleFilterClick("Platinum")}
                >
                  Platinum
                </button>
              </div>
              <button
                className="dashboard-refresh-btn collection-refresh-btn"
                onClick={refreshPage}
              >
                <img src="/images/dashboard/refresh.svg" alt="" />
              </button>
            </div>
            <div className="dashboard-card-item-wrapper">
              <div className="dashboard-card-items my-collection-items">
                {uniqueData.map((nft, i) => (
                  <SingleNft
                    key={i}
                    id={nft.tokenID}
                    image={nft.data.image}
                    name={nft.data.name}
                  />
                ))}
              </div>
              {/* <div className="load-more-btn-con">
              {visibleCards < uniqueData.length && (
                <button
                  onClick={loadMoreCards}
                  className="load-more-btn custom-btn mt-4 d-flex align-items-center text-center justify-content-center"
                >
                  Load More
                </button>
              )}
            </div> */}
            </div>
          </div>
        </div>
    </>
  );
};

export default Marketplace;
