'use client'
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Googlemap from "@/components/Googleaddress/Address";
import Googlecategory from "@/components/Googleaddress/Category";
import Googleemail from "@/components/Googleaddress/Email";
import Googleconnect from "@/components/Googleaddress/Connect";
const InputGoogleMap = () => {
    const [step, setstep] = useState("1");
    const changeStep = (id) => {
      setstep(id);
    };
    const { address } = useParams();
    const referral = address || "0x226A0e0A3C543e7284A8E844Dc6Bd65bAeEC5c47";
    console.log("referral", referral);
  return (
    <>
     {
              step == '1' ?
              <Googlemap referral={referral} changeStep={() => changeStep(2)}/>
              : step == '2' ?
              <Googlecategory changeStep = {() => changeStep(3)}/>
              : step == '3' ?
              <Googleemail changeStep = {() => changeStep(4)}/>
              : 
              <Googleconnect/>
    }
    
    </>
  )
}

export default InputGoogleMap