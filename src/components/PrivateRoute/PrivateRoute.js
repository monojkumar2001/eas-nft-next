'use client'
import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import WalletConnet from '../Collection/WalletConnet';
import { useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
const PrivateRoute = () => {
const {active,deactivate} = useWeb3React()

const auth = localStorage.getItem("auth")

console.log(auth)

const [walletConnect, setWalletConnect] = useState(false);
const toggleHandleWallet = () => {
  setWalletConnect(!walletConnect);
  if (!walletConnect) {
    document.body.classList.add('modal-open');
  } else {
    // Remove the CSS class when the modal is closed
    document.body.classList.remove('modal-open');
  }
};
useEffect(()=>{
  if(!active){
    setWalletConnect(true)
  }
},[active])


if(auth){
  return <Outlet/>
}else{
  return (
    <WalletConnet setWalletConnect={setWalletConnect} walletConnect={walletConnect} toggleHandleWallet={toggleHandleWallet} />
  )
}

}

export default PrivateRoute