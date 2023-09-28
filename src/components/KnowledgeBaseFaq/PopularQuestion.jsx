"use client";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import '../../styles/PopularQuestion.css'
import { BiPlusMedical } from "react-icons/bi";
const PopularQuestion = () => {
  const data = {
    rows: [
      {
        title:  (
          <>
            <span><BiPlusMedical size={12}/> </span> Is it safe to share my ETH wallet address?
          </>
        ),
        content: `Yep! It is a public identifier for your wallet on the Ethereum network. Your wallet address alone cannot be used to access or steal your funds. It is safe to give out, and you can share your crypto wallet address anywhere you want to receive payments, tips, or donations. <a href="/docs/what-is-an-eth-wallet-address">Learn more</a>`,
      },
      {
        title:  (
          <>
            <span><BiPlusMedical size={12}/> </span> What is OpenSea Marketplace?
          </>
        ),
        content: `OpenSea is a popular peer-to-peer marketplace for buying and selling non-fungible tokens (NFTs) and other digital assets, including collectibles, game items, domain names, art, and more. For more info, view <a href="/docs/how-to-buy-nft-on-opensea/"> Buying NFTs on OpenSea. </a>`,
      },
    ],
  };
  const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
  return (
    <div>
      <div className="faq-question-content mt-4">
        <div className="faq-question-content-header">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
          <h2 className="section-title-2 mb-5">Most Popular Questions</h2>
        </div>
        <div className="faq-conntes">
          <Faq data={data} styles={styles} />
        </div>
      </div>
    </div>
  );
};

export default PopularQuestion;
