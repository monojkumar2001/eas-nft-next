'use client';
// import { Link, useParams, useNavigate } from "react-router-dom";
import { useRouter,useParams  } from "next/navigation";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { ethers } from "ethers";
import {
  contact_address,
  contact_ABI,
  MarketPlace_Address,
  Market_ABI,
} from "../../../app/config";
import { fetchJsonFromIpfs, convertIpfsAddress } from "../../utils";
import { useEffect } from "react";
import Swal from "sweetalert2";

import axios from "axios";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import Image from "next/image";
import Sale from "@/components/Collection/sale";
import TransferWallet from "@/components/Collection/TransferWallet";
import NftTransection from "@/components/Collection/NftTransection";
import Loading from "@/components/Loading/Loading";
import ReactImageMagnify from "react-image-magnify";
import Link from "next/link";
const NFTDetails = () => {
  const { account, library } = useWeb3React();
  const router = useRouter();
  const [waiting, setWaiting] = useState(false);
  const [tarits, setTarits] = useState(true);
  const [nfts, setNfts] = useState({});
  const { id } = useParams();
  const [transfer, setTransfer] = useState("");
  const [owerOf, setOwnerOf] = useState("");
  const [price, setPrice] = useState("");
  const [listing, setListing] = useState(false);
  const [isBuy, setIsBuy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [nftTableData, setNftTableData] = useState(true);
  const [listPrice, setListPrice] = useState("");
  const [attributes, setAttributes] = useState([]);

  const [seller, setSeller] = useState(false);

  const web3 = new Web3("https://rpc-mumbai.maticvigil.com");

  const fetchNFT = async () => {
    try {
      const contact = new web3.eth.Contract(contact_ABI, contact_address);
      const MarketContract = new web3.eth.Contract(
        Market_ABI,
        MarketPlace_Address
      );

      const ownerOf = await contact.methods.ownerOf(id).call({ from: account });
      if (ownerOf === account) {
        setListing(true);
      }

      await ListPrice(MarketContract, id);

      console.log(id);

      const isNFTListed = await MarketContract.methods
        .isNFTListed(contact_address, id)
        .call();
      setIsBuy(isNFTListed);
      setOwnerOf(ownerOf.substring(42, 37));
      const tokenURI = await contact.methods.tokenURI(id).call();
      console.log(tokenURI);
      const Nft = await fetchJsonFromIpfs(tokenURI);
      setNfts(Nft);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const SellerNFtaddress = async () => {
    try {
      const MarketContract = new web3.eth.Contract(
        Market_ABI,
        MarketPlace_Address
      );
      const sellerList = await MarketContract.methods
        .getSellerAddress(contact_address, id)
        .call();
      if (sellerList == account) {
        setSeller(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const ListPrice = async (MarketContract, id) => {
    try {
      const price = await MarketContract.methods.getItemPrice(id).call();

      if (price) {
        const buyPrice = await ethers.utils.formatEther(price, 18);
        setListPrice(buyPrice);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleTransfer = async () => {
    try {
      if (library && account) {
        const signer = library.getSigner();
        const NFTOwner = await signer.getAddress();
        const contract = new ethers.Contract(
          contact_address,
          contact_ABI,
          signer
        );
        const ownerOf = await contract.ownerOf(id);

        if (typeof contract.transferFrom === "function") {
          if (ownerOf === NFTOwner) {
            const transferNFT = await contract.transferFrom(
              NFTOwner,
              transfer,
              id
            );
            if (transferNFT) {
              let formData = new FormData();
              formData.append("tokenId", id);
              formData.append("price", "0.00");
              formData.append("from_address", NFTOwner);
              formData.append("to_address", transfer);
              formData.append("type", 3);
              axios.post("/api/nft/transection", formData).then((res) => {
                if (res.data.status === 200) {
                  Swal.fire(
                    "Congratulations!",
                    `Your NFT transferred successfully to this address: ${transfer}`,
                    "success"
                  );
                  router("/my-nft-list");
                } else {
                  Swal.fire("Oops", "your nft listing Fail", "error");
                }
              });
            }
          } else {
            Swal.fire("Oops!", "You are not the owner of this NFT", "error");
          }
        } else {
          console.log("safeTransferFrom is not available in the contract.");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleListing = async () => {
    try {
      if (library && account) {
        const signer = library.getSigner();
        const account = await signer.getAddress();
        const contract = new ethers.Contract(
          MarketPlace_Address,
          Market_ABI,
          signer
        );

        const contact = new ethers.Contract(
          contact_address,
          contact_ABI,
          signer
        );

        const isApprovedForAll = await contact.isApprovedForAll(
          account,
          MarketPlace_Address
        );
        console.log("isApprovedForAll", isApprovedForAll);

        if (!isApprovedForAll) {
          const setApprovalForAll = await contact.setApprovalForAll(
            MarketPlace_Address,
            true
          );
          console.log(setApprovalForAll);
        }

        const listingPrice = await contract.getListingPrice();
        const weiPrice = ethers.utils.parseUnits(price, 18);

        const gasLimit = 2000000;

        const createMarketItem = await contract.createMarketItem(
          contact_address,
          id,
          weiPrice,
          { value: listingPrice.toString(), gasLimit }
        );

        const tx = await createMarketItem.wait();

        if (tx) {
          let formData = new FormData();
          formData.append("tokenId", id);
          formData.append("price", price);
          formData.append("from_address", tx.from);
          formData.append("to_address", tx.to);
          formData.append("type", 1);
          axios.post("/api/nft/transection", formData).then((res) => {
            if (res.data.status === 200) {
              Swal.fire("Good jobs", "Your NFT  listing in EAS MarketPlace");
              router("/my-nft-list");
            } else {
              Swal.fire("Oops", "your nft listing Fail", "error");
            }
          });
        } else Swal.fire("Oops", "your nft listing Fail", "error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleBuy = async () => {
    try {
      if (library && account) {
        setLoading(false);

        const signer = library.getSigner();
        const MarketContract = new ethers.Contract(
          MarketPlace_Address,
          Market_ABI,
          signer
        );

        const price = await MarketContract.getItemPrice(id);
        const gasLimit = 300000;

        const createMarketItem = await MarketContract.createMarketSale(
          contact_address,
          id,
          { value: price, gasLimit }
        );

        const tx = await createMarketItem.wait();

        if (tx.status === 1) {
          const formData = new FormData();
          formData.append("tokenId", id);
          formData.append("price", price);
          formData.append("from_address", tx.from);
          formData.append("to_address", tx.to);
          formData.append("type", 2);

          axios.post("/api/nft/transection", formData).then((res) => {
            if (res.data.status === 200) {
              Swal.fire(
                "Good job",
                "Your NFT was successfully bought in the EAS MarketPlace",
                "success"
              );
            } else {
              Swal.fire("Oops", "Your NFT purchase failed", "error");
            }
            setLoading(false);
          });
        } else {
          Swal.fire("Oops", "Transaction failed", "error");
        }
      }
    } catch (e) {
      console.error("Error:", e);
      setLoading(false); // Set loading to false in case of an error
      Swal.fire("Error", "An error occurred during the transaction", "error");
    }
  };

  const handleRemoveList = async () => {
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
        id
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

  const handleTarits = () => {
    setTarits(!tarits);
  };

  const getNftTableData = (id) => {
    axios.get(`api/getNftTransection/${id}`).then((res) => {
      setNftTableData(res.data.data);
      // setLoading(false)
    });
  };

  useEffect(() => {
    fetchNFT();
    getNftTableData(id);
    SellerNFtaddress();
  }, [id, account]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Promise.all(
          nfts.attributes.map((nft) => ({
            trait_type: nft.trait_type,
            value: nft.value,
          }))
        );
        setAttributes(data);
      } catch (error) {}
    };

    fetchData();
  }, [nfts]);
  const imgUri=convertIpfsAddress(nfts.image);
  return (
    <>
      {!loading ? (
        <div className="nft-details">
          <div className="container">
            <div className="nft-details-wrapper">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="nft-details-img-item">
                    <div className="nft-img">
                    <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Versace',
                                    isFluidWidth: true,
                                    src:imgUri,
                                    sizes: '(max-width: 280px) 100vw, (max-width: 1200px) 30vw, 360px'
                                },
                                largeImage: {
                                    src: imgUri,
                                    width: 1426,
                                    height: 2000
                                },
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                                enlargedImageContainerDimensions: {
                                  width: '130%',
                                  height: '100%'
                              }
                            }}
                        />
                      {/* <img width={500} height={625} alt="nft image" src={convertIpfsAddress(nfts.image)} /> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="nft-content-item">
                    <div className="nft-owner-item">
                      <h3>{nfts.name}</h3>
                      <span>
                        Owned by <Link href="/">{owerOf}</Link>
                      </span>
                    </div>
                    <div className="nft-sale-item-con">
                      <div className="nft-buy-item">
                        {isBuy && (
                          <div className="nft-current-price">
                            <span>Current Price</span>
                            <div className="d-flex align-items-end gap-2">
                              <h3>{listPrice} ETH</h3>
                              {/* <span>$1,000</span> */}
                            </div>
                          </div>
                        )}
                        <div className="nft-description-item">
                          <div
                            className={
                              tarits
                                ? "traits_item-con "
                                : " active traits_item-con"
                            }
                          >
                            <div
                              className="traits-item-btn d-flex align-items-center justify-content-between"
                              onClick={handleTarits}
                            >
                              <h5>Traits</h5>
                              <span>
                                <IoIosArrowUp />
                              </span>
                            </div>

                            <div className="nft-traits-item w-100">
                              <div className="row g-3">
                                {attributes.map((nft, i) => {
                                  return (
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                      <div className="traits-item" key={i}>
                                        <h5>{nft?.trait_type}</h5>
                                        <p>{nft?.value}</p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="nft-description-item">
                          <h3>Description</h3>
                          <div className="nft-disc-item">
                            {/* <Link to={"/"}>By 67F230</Link> */}
                            <p>{nfts.description}</p>
                          </div>
                        </div>
                        <div className="nft-buy-btn d-flex mt-4 align-items-center gap-2 w-100">
                          {listing ? (
                            <>
                              <Sale
                                setPrice={setPrice}
                                price={price}
                                handleSale={handleListing}
                                id={id}
                                address={account}
                              />
                              <TransferWallet
                                setTransfer={setTransfer}
                                transfer={transfer}
                                address={account}
                                id={id}
                                handleTransfer={handleTransfer}
                              />
                            </>
                          ) : isBuy ? (
                            seller ? (
                              <button
                                className="custom-btn w-100"
                                onClick={handleRemoveList}
                              >
                                Delist from sale
                              </button>
                            ) : (
                              <button
                                className="custom-btn w-100"
                                onClick={handleBuy}
                              >
                                buy Now
                              </button>
                            )
                          ) : (
                            <button className="custom-btn w-100">
                              not for Sale
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {nftTableData.length > 0 ? (
                <NftTransection nftData={nftTableData} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default NFTDetails;
