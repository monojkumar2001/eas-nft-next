"use client";
import { useState, useEffect, useContext } from "react";
import "../../styles/myCollection.css";
import { convertIpfsAddress } from "../../app/utils";
import axios from "axios";
import SaleNft from "@/components/Collection/SaleNft";
import Loading from "@/components/Loading/Loading";
import Link from "next/link";
import api from "@/api";
import Image from "next/image";
const NftCollection = () => {
  const [activeNfts, setActiveNfts] = useState("ALL");
  const [category, setCategory] = useState([]);

  const toggleNfts = (index) => {
    console.log(index);
    setActiveNfts(index);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const [loading, setLoading] = useState(true);
  const [NFTs, setNFTs] = useState([]);
  const [showNft, setShowNft] = useState([]);

  const getCategory = async () => {
    try {
      axios.get("api/category").then((res) => {
        setCategory(res.data.data);
        console.log("Category: ", res.data.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = async (status) => {
    console.log("fetch data", status);
    try {
      api.get(`api/nft-minted/mintedData/${status}`).then((res) => {
        setNFTs(res.data.data);
        console.log("Minted nft: ", res.data.data);
        setLoading(false);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    fetchData(activeNfts);
  }, [activeNfts]);

  console.log("NFTs", NFTs);

  if (loading) {
    return <Loading />;
  }

  // setLoading(false);

  // let updatedData = NFTs;
  // if (status != "All") {
  //   console.log("inside :", status);
  //   updatedData = updatedData.filter((item) => item.Category_id == status);
  //   setShowNft(updatedData);
  // } else {
  //   setShowNft(updatedData);
  // }

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
         onClick={() => {
           toggleNfts("ALL");
         }}
       >
         All
       </button>
       {category.map((res) => (
         <button
           key={res.id}
           className="my-nft-btn"
           onClick={() => {
             toggleNfts(res.id);
           }}
         >
           {res.name}
         </button>
       ))}
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
              {NFTs.map((nft, i) => {
                return (
                  <>
                    <Link
                      className="images-card d-flex align-items-center justify-content-between flex-column"
                      key={i}
                      href={`/nft-details/${nft.tokenId}`}
                    >
                      <div className="nft-imgs">
                        {/* <img src={convertIpfsAddress(props.image)} alt="" /> */}
                        <img alt='nft img' src={convertIpfsAddress(nft.ipfs)} />
                      </div>
                      <div className="nft-titles">
                        <p>{nft.address}</p>
                        <button className="buy-nft-btn custom-btn">
                          VIEW NFT DETAILS
                        </button>
                      </div>
                    </Link>
                  </>
                );
              })}

              {/* {NFTs.map((nft, i) => {
         if (nft && nft.ipfs) {
           return <SaleNft key={i} image={nft.ipfs} name={nft.name} tokenId={nft.tokenId}/>;
         } else {
           return <SaleNft key={i} image={null} name={null} />;
         }
       })} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftCollection;
