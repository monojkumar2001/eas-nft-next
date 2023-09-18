import React from "react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import ImageCard from "./ImageCard";
import Loading from "../Loading/Loading2";

const MyNfts = () => {
  const [NFTs, setNFTs] = useState([]);
  const [showNft, setShowNft] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeNfts, setActiveNfts] = useState(1);
  const [tab, setTab] = useState('All');
  useEffect(() => {
    axios.get(`api/nft/${localStorage.getItem('user_id')}`).then(res => {
      setNFTs(res.data.data);
      setShowNft(res.data.data);
    })
  }, [])

  const active = {
    backgroundColor : '#00CDDF',
    color : '#ffffff'
  }
  const noActive = {
    backgroundColor : '#F2F3F4',
    color : '#000000'
  }

  const toggleTab = (state,status) => {
    setActiveNfts(state);
    setTab(status);
    let updatedData = NFTs;
    if(status != 'All'){
      console.log('inside :',status)
      updatedData = updatedData.filter( (item) => item.status == status)
      setShowNft(updatedData);  
      setLoading(false)    
    }else{
      setShowNft(updatedData);
      setLoading(false)
    }
  }

  useEffect(() => {
    toggleTab(1,'All')
  }, [])

  function refreshPage() {
    window.location.reload(false);
  }

  
  


  return (
    <>
     { ! loading ?
     
     <div className="my-nfts-wrapper">
        <div className="dashboard-header-item d-flex align-items-center justify-content-between">
          <div className="dashboard-con-btn d-flex align-items-center gap-3">
            <button style={tab === 'All' ? active : noActive}
              onClick={() => {
                toggleTab(1,'All');
              }}
            >
              ALL
            </button>
            <button style={tab === 'Minted' ? active : noActive}
              onClick={() => {
                toggleTab(1,'Minted');
              }}
            >
              MINTED
            </button>
            <button style={tab === 'pending' ? active : noActive}
              onClick={() => {
                toggleTab(1,'pending');
              }}
            >
              IN PROCESS
            </button>
            <button style={tab === 'Approaved' ? active : noActive}
              onClick={() => {
                toggleTab(1,'Approaved');
              }}
            >
              PROCESSED
            </button>
          </div>
          <div className="dashboard-count d-flex align-items-center gap-3">
            {/* <span>12450</span> */}
            <button className="dashboard-refresh-btn" onClick={refreshPage}>
              <img src="/images/dashboard/refresh.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="dashboard-card-item-wrapper">
          <div
            className={
              activeNfts === 1
                ? "nft-card-item active-nft-card-item"
                : "nft-card-item"
            }
          >
            <div className="dashboard-card-items">
              {
                // showNft.length > 0 ? <ImageCard nfts={NFTs}/> : 'NO NFT FOUND'
                <ImageCard nfts={showNft}/>
              }
              
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
      </div> :  <Loading/>}
    </>
  );
};

export default MyNfts;
