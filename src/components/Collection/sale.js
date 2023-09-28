'use client';
import React,{useState} from "react";
import "../../styles/myCollection.css";

const Sale = (props) => {
    const [error, setError] = useState('')
    const handlePrice = (e) => {
      
      const value = e.target.value;
      const regex = /^[0-9].*$/;
    
      if (regex.test(value) || value === '') {
        props.setPrice(e.target.value)
        setError('');
      } else {
        setError('Please enter only numbers.');
      }
    }

  return (
    <>
      <button
        data-bs-toggle="modal"
        data-bs-target="#BuyModal"
        className="custom-btn w-100"
      >
        Sale NFT
      </button>
      <div
        className="modal fade"
        id="BuyModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content wallet-connect-content">
          <div className="modal-header justify-content-center">
            <img src="/images/logo.png" alt="" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="wallet-content-wrapper d-flex flex-column text-start gap-3">
                  <label htmlFor="" className="label-text">
                  The item is listed for sale at the price you set
                  </label>
                  <div className="wallet-input-fluid w-100">
                    <input
                      type="number"
                      min={0}
                      className="w-100"
                      placeholder="enter NFT PRICE"
                      value={props.price}
                      onChange={handlePrice}
                    />
                    <span>ETH</span>
                   
                  </div>        
                    {error && <div className="error">{error}</div>}
                  <label htmlFor="" className="label-texts mb-2">
                    <span>NFT owner Address: </span>
                    <span>{props.address}</span>
                  </label>
                  <label htmlFor="" className="label-texts">
                    <span> Token Id: </span>
                    <span>{props.id}</span>
                  </label>
                  <div className="conform-btn-item mb-2 mt-3 d-flex justify-content-center">
                    <button className="custom-btn" onClick={props.handleSale}>List For Sale</button>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
