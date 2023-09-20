'use client';
import { useState, useEffect } from "react";
import { fetchJsonFromIpfs } from "../utils";
import "../../styles/myCollection.css";

import {
  contact_address,
  contact_ABI,
  MarketPlace_Address,
  Market_ABI,
} from "../config";

import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import MySingleNft from "@/components/Collection/MySingleNft";
import Loading from "@/components/Loading/Loading";

const MyCollection = () => {
  const [loading, setLoading] = useState(false);
  const { active,library } = useWeb3React();

  const [NFTs, setNFTs] = useState([]);
  const [listedNFT, setListedNFT] = useState([]);

  const handleSign = async () => {
    try {
      if (library) {
        const signer = library.getSigner();
        const address = await signer.getAddress();
        const contact = new ethers.Contract(
          contact_address,
          contact_ABI,
          signer
        );
        const marketplaceContract = new ethers.Contract(
          MarketPlace_Address,
          Market_ABI,

          signer
        );
        const userTokenId = await contact.getTokenIds(address);

        const numericUserTokenId = userTokenId.filter((value) =>
          ethers.BigNumber.isBigNumber(value)
        );

        console.log(numericUserTokenId);

        const NFT = [];

        for (const tokenId of numericUserTokenId) {
          const tokenURI = await contact.tokenURI(tokenId);
          const data = await fetchJsonFromIpfs(tokenURI);
          const nftItem = { tokenId: tokenId.toString(), data: data }; // Add tokenId and data
          NFT.push(nftItem);
        }

        setNFTs(NFT);
        setLoading(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getCreateListNFt = async () => {
    try {

      const signer = library.getSigner();
      const address = await signer.getAddress();
      const contact = new ethers.Contract(
        contact_address,
        contact_ABI,
        signer
      );
      const marketplaceContract = new ethers.Contract(
        MarketPlace_Address,
        Market_ABI,

        signer
      );



      const fetchItemsCreated = await marketplaceContract.fetchItemsCreated({
        from: address,
      });

      const filterNFt = await fetchItemsCreated.map((nft) => nft.tokenId);

      console.log(filterNFt);

      const numericUserTokenId = filterNFt.filter((value) =>
        ethers.BigNumber.isBigNumber(value)
      );
      console.log(numericUserTokenId);
      const NFT = [];

      for (const tokenId of numericUserTokenId) {
        const tokenURI = await contact.tokenURI(tokenId);
        const data = await fetchJsonFromIpfs(tokenURI);
        const nftItem = { tokenId: tokenId.toString(), data: data };
        NFT.push(nftItem);
      }
      setListedNFT(NFT);
      //  setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleSign();
    getCreateListNFt()
  }, [active]);

  return (
    <>
      {loading ? (
        <div className="my-nfts-wrapper my-collection-page">
          <div className="container">
            <div className="dashboard-card-item-wrapper">
              <div className="dashboard-card-items my-collection-items">
                {NFTs.map((nft, i) => {
                  if (nft.data && nft.data.image) {
                    return (
                      <MySingleNft
                        index={i}
                        tokenId={nft.tokenId}
                        image={nft.data.image}
                        name={nft.data.name}
                      />
                    );
                  } else {
                    return (
                      <MySingleNft
                        index={i}
                        tokenId={nft.tokenId}
                        image={null}
                        name={null}
                      />
                    );
                  }
                })}
              </div>
              <div className="cpt-7">
                <h1 className="address-title mb-5">LISTED FOR SALE</h1>
                <div className="dashboard-card-items my-collection-items">
                  {listedNFT.map((nft, i) => {
                    if (nft.data && nft.data.image) {
                      return (
                        <MySingleNft
                          key={i}
                          tokenId={nft.tokenId}
                          image={nft.data.image}
                          name={nft.data.name}
                        />
                      );
                    } else {
                      return (
                        <MySingleNft
                          key={i}
                          tokenId={nft.tokenId}
                          image={null}
                          name={null}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default MyCollection;
