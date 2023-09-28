'use client';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Walletconnect from "../Collection/WalletConnet";

const Connect = () => {

  const [items, setItems] = useState({
    nft: "",
    category: "",
    subCategory: "",
    email: "",
    address: "",
  });
  useEffect(() => {
    setItems({
      ...items,
      nft: localStorage.getItem("nfts"),
      category: localStorage.getItem("category"),
      subCategory: localStorage.getItem("sub-category"),
      email: localStorage.getItem("email"),
    });
  }, []);

  const [walletConnect, setWalletConnect] = useState(false);
  const toggleHandleWallet = () => {
    setWalletConnect(!walletConnect);
  };

  return (
    <div>
      <div className="claim-my-nft-item">
        <button className="save-change-btn custom-btn" onClick={toggleHandleWallet}>
          Connect wallet
        </button>
        <Walletconnect
          setWalletConnect={walletConnect}
          walletConnect={walletConnect}
          toggleHandleWallet={toggleHandleWallet}
          opt="2"
        />
      </div>
    </div>
  );
};

export default Connect;
