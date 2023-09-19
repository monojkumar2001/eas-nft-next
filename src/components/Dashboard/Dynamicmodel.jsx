import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { contact_address, contact_ABI } from "../../../src/config";
import { ethers } from "ethers";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import NFTModelCongratulations from "../Collection/NFTModelCongratulations";
import AttributesCard from "./AttributesCard";
import { useWeb3React } from "@web3-react/core";
import "../../Style/hourglass.css";
import Hammer from "../Loading/hammer";
const Dynamicmodel = ({ price, item }) => {
  const { account, library } = useWeb3React();

  const [loading, setLoading] = useState(false);

  const [nftModel, setNftModel] = useState(false);
  const [hash, setHash] = useState("");

  const navigate = useNavigate();
  // console.log("item:", item)
  const referral = item.referral == "undefined" ?  "0x02941ca660485Ba7Dc196B510D9A6192c2648709" : item.referral ;
  console.log("referral new:", referral)

  const mintNft = (jsonCid) => {
    const cid = "ipfs://" + jsonCid;

    if (library && account) {
      console.log("Web3 Connected!");

      handleSign(library, cid, jsonCid);
    } else {
      console.log(
        "Web3 Not Connected. Please install MetaMask or connect your wallet."
      );
    }
  };

  const handleSign = async (provider, cid, jsonCid) => {
    try {
      setLoading(true);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const contact = new ethers.Contract(contact_address, contact_ABI, signer);
      if (address.toLowerCase() === localStorage.getItem("user_id")) {
        const gasLimit = 2000000;
        const priceAsString = price.toString();
        console.log(priceAsString);
        const weiPrice = ethers.utils.parseUnits(priceAsString, 18);

        console.log(cid, referral);
        const mint = await contact.safeMint(cid, referral, {
          value: weiPrice,
          gasLimit,
        });

        const tx = await mint.wait();
        setHash(tx.transactionHash);
        const id = await contact.getNextSafeMintTokenId();
        const tokenId = id.toString() - 1;
        console.log(tokenId);
        saveStatus(tokenId, jsonCid);
        setLoading(false);
        setNftModel(true);
        navigate("/account/my-nft");
      } else {
        Swal.fire(
          "error",
          "You should mint NFT on your login account",
          "error"
        );
        navigate("/account/my-nft");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const saveStatus = (tokenId, jsonCid) => {
    axios.get(`api/nft/status/${tokenId}/${jsonCid}`).then((res) => {
      if (res.data.status == 200) {
        console.log("status change to minted");
      } else {
        console.log("not minted");
      }
    });
  };


  return (
    <>
     
        <div
          className="modal fade "
          id="nft-model"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content filter-item-model-image">
              <div className="modal-header filter-image-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body filter-image-item-model">
                <div className="filter-model-img">
                  <LazyLoadImage
                    src={`https://ipfs.io/ipfs/${item.ipfs}`}
                    width="auto"
                    height="auto"
                  />
                </div>
                <div className="filter-nft-content">
                  {/* <div className="nft-title">
                <span>{item.subcategory?.name}</span>
                <h4>{item.address}</h4>
            
              </div> */}

                  {/* ============ Attributes Item =========== */}
                  {/* <div className="filter-nft-content-items">
              <div className="filter-nft-content-item" >
                      <div className="filter-content-title">
                        <span>{item.subcategory?.name}</span>
                        <h5>{item.address}</h5>
                      </div>
                    </div>
            
              </div> */}
                  <AttributesCard item={item} />

                  <div className="filter-nft-wallet-item mt-4 d-flex align-items-center justify-content-between gap-3">
                    <div className="filter-nft-wallet d-flex align-items-center gap-2">
                      <div className="nft-address-icon">
                        <img src="/images/addres.svg" alt="" />
                      </div>
                      <div className="nft-wallet-content">
                        <p>{item.user_id}</p>
                        <span>{item.created_at} </span>
                      </div>
                    </div>
                    {item.status == "Approaved" ? (

                     loading ? (
                      <button
                      className="filter-nft-opensea"
                      id="congats"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                    
                    >
                      <div className="mint-hammer">
                      <Hammer/>
                      </div>
                      <span>Please wait..</span>
                    </button>
                     ) : (

                      <button
                      className="filter-nft-opensea"
                      id="congats"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      onClick={() => mintNft(item.jsonCid)}
                    >
                      <div className="mint-hammer">
                        <img src="/images/hammer.svg" alt="" />
                      </div>
                      <span>Mint Now</span>
                    </button>

                     )
                     
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NFTModelCongratulations
            image={`https://ipfs.io/ipfs/${item.ipfs}`}
            hash={hash}
            nftModel={nftModel}
            setNftModel={setNftModel}
          />
        </div>
    </>
  );
};

export default Dynamicmodel;
