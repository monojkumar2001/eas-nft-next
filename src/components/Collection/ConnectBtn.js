import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { truncateAddress } from "../../wallet/utils";
import WalletConnet from "./WalletConnet";
import { usePathname  } from "next/navigation";

const ConnectBtn = () => {
  const navigate = usePathname();

  // const { active, account,deactivate} = useWeb3React();

  const disconnect = () => {
    deactivate();
    window.localStorage.setItem("provider", undefined);
    localStorage.removeItem("provider");
    localStorage.removeItem("user_id");
   localStorage.removeItem("auth")
    window.location.reload()
    navigate("/")
  };

  

  const [walletConnect, setWalletConnect] = useState(false);

  const toggleHandleWallet = () => {
    setWalletConnect(!walletConnect);
    document.body.classList.toggle('home-page', !walletConnect);
  };


  return (
    <>
      {active ? (
        <button className="custom-btn" onClick={disconnect}>
          {truncateAddress(account)}
        </button>
      ) : (
        <button className="custom-btn" onClick={toggleHandleWallet}>Connect wallet</button>
      )}

      <WalletConnet
        setWalletConnect={walletConnect}
        walletConnect={walletConnect}
        toggleHandleWallet={toggleHandleWallet}
      />
    </>
  );
};

export default ConnectBtn;
