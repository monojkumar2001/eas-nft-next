'use client';
import React,{useState} from 'react';

import '../styles/home.css';
import {useParams} from 'next/navigation';
import Googlemap from '../components/Googleaddress/Address'
import Image from 'next/image'
import HeroCardItems from '@/components/Home/HeroCardItems';
import AboutUsItem from '@/components/Home/AboutUsItem';
import NFTCollections from '@/components/Home/NFTCollections';
import UseCasesItem from '@/components/Home/UseCasesItem';
import FaqQuestionItem from '@/components/Home/FaqQuestionItem';
import EasAffliateItem from '@/components/Home/EasAffliateItem';

export default function Home() {
  const [step, setstep] = useState('1')
const changeStep = (id) => {
  setstep(id);
}
const {address} = useParams();
const referral = address || "0x226A0e0A3C543e7284A8E844Dc6Bd65bAeEC5c47";
console.log('referral', referral)
  return (
    <>
        <div className="home-page">
      <section className="hero">
        <div className="hero-bg-overlay"></div>
        <div className="container">
          <div className="hero-wrapper">
            <span className="focus-color">Ethereum Address Service</span>
            <h1 className="hero-title">
              Mapping the World's Addresses as <span>NFT-based</span> Digital
              Rights
            </h1>

            {/* {
              step == '1' ?
              <Googlemap referral={referral} changeStep={() => changeStep(2)}/>
              : step == '2' ?
              <Googlecategory changeStep = {() => changeStep(3)}/>
              : step == '3' ?
              <Googleemail changeStep = {() => changeStep(4)}/>
              : 
              <Googleconnect/>
            } */}
            <div className="hero-map-img">
              <Image src="/images/home/map-3d.png" width={300} height={400} />
            </div>
          </div>
        </div>

        <div className="hero-bg-hover"></div>
      </section>

      {/* ======================= HERO CARD ====================== */}
      <HeroCardItems />

      {/* ====================== ABOUT US ========================== */}
      {/* <AboutUsItem /> */}

      {/* ==================== NFT COLLECTIONS ==================== */}
      {/* <NFTCollections /> */}

      {/* =====================  NFT USE CASES ==================== */}
      {/* <UseCasesItem /> */}

      {/* ========================= FAQ QUESTION  ================== */}
      {/* <FaqQuestionItem /> */}
      
      {/* ======================== EAS AFFILIATE ================== */}
      {/* <EasAffliateItem /> */}
      </div>
    </>
  )
}
