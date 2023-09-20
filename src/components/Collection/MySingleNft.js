import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { convertIpfsAddress } from "../../app/utils";
import { ethers } from "ethers";
import { MarketPlace_Address, Market_ABI, contact_address } from "../../app/config";
import Swal from "sweetalert2";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
const MySingleNft = (props) => {

  const { account,library } = useWeb3React();



  const web3 = new Web3("https://rpc-mumbai.maticvigil.com");

  const [isListed, setIsListed] = useState(false);
  const isList = async () => {
    try {
      const marketContract = new web3.eth.Contract(
        Market_ABI,
        MarketPlace_Address
      );
      const isNFTListed = await marketContract.methods
        .isNFTListed(contact_address, props.tokenId)
        .call();

      console.log(isNFTListed);

      setIsListed(isNFTListed);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isList();
  }, [props.tokenId]);

  const handleRemoveList = async (MarketPlace_Address, Market_ABI, contact_address, tokenId) => {
    if (!account) {
      console.log("Not connected to a wallet.");
      return;
    }
    try {
      const signer = library.getSigner();
      const marketContract = new ethers.Contract(
        MarketPlace_Address,
        Market_ABI,
        signer
      );
  
      const removeMarketSale = await marketContract.removeMarketItem(
        contact_address,
        tokenId
      );
      const tx = removeMarketSale.wait();
  
      if (tx) {
        Swal.fire(
          "congratulation",
          "Your NFT has been removed from the marketplace",
          "success"
        );
      } else {
        Swal.fire("Oops", "You are not the owner of this NFT", "info");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="images-card d-flex align-items-center justify-content-center flex-column">
        <Link to={`/nft-details/${props.tokenId}`} key={props.index}>
          <div className="nft-img">
            <img src={convertIpfsAddress(props.image) || null} alt="" />
          </div>
        </Link>
        <div className="nft-titles">
          <p> {props.name || null} </p>
          {isListed ? (
             <Link
             to={`/nft-details/${props.tokenId}`}
             className="buy-nft-btn custom-btn"
           >
              Delist from sale{" "}
           </Link>
          ) : (
            <Link
              to={`/nft-details/${props.tokenId}`}
              className="buy-nft-btn custom-btn"
            >
              list for sale{" "}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default MySingleNft;
