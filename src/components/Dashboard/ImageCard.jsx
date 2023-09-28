'use client';
import React, { useState } from "react";
import axios from "axios";
// import { convertIpfsAddress } from "../../app/utils";
import DynamicModal from './Dynamicmodel'
import Image from "next/image";

const ImageCard = ({nfts}) => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [price, setPrice] = useState('');

  const openModal = (item) => {
    console.log(item)
    setModalContent(item);
    axios.get(`api/getCategoryPrice/${item.Category_id}`).then(res => {
      setPrice(res.data.data);
    })
    setTimeout(getCategoryPrice,1000);
  };

  const getCategoryPrice = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setModalContent('');
    setIsModalOpen(false);
  };

  return (
    <>
    {
      nfts.map((item) => {
        return (
          <div key={item.id}>
            <div
            data-bs-toggle="modal"
            data-bs-target="#nft-model"
            className="images-card d-flex align-items-center justify-content-start flex-column"
            
            onClick={() => openModal(item)}
          >
            <div className="nft-img" >
              {
                item.status == 'pending' ?
                <Image width={500} height={625}  src="https://st7yvhbtkj4kdnf3vwyncrotnch5e5b5yuga3um6thhfhgg7fwgq.arweave.net/lP-KnDNSeKG0u62w0UXTaI_SdD3FDA3RnpnOU5jfLY0?ext=png" alt="nft image" />
                :
                <Image width={500} height={625}   src={`https://ipfs.io/ipfs/${item.ipfs}`} alt="nft image" />
              }
            </div>
            <div className="nft-titles">
              <p>{item.address}</p>
              <span>{item.subcategory?.name}</span>
            </div>
          </div>
          <DynamicModal
            price={price}
            item={modalContent}
          />
            
            </div>
        )
      } 
      
        
        
        )
    }
    </>
  );
};

export default ImageCard;
