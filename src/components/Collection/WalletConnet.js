'use client';
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, useLocation } from "next/navigation"; // Removed useLocation as it's not used
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../../wallet/connectors";
import WelcomeToEasNftWallet from "../Popup/WelcomeToEasNftWallet";
import { toHex } from "../../wallet/utils";
import Image from "next/image";

const WalletConnet = ({ opt, walletConnect, toggleHandleWallet }) => {
  const baseUrl = "accurentvc.com";

  const [easNftWallet, setEasNftWallet] = useState(false);

  const toggleBtn = () => {
    setEasNftWallet(!easNftWallet);
  };

  const [pagelocation, setPageLocation] = useState(useLocation().pathname);
  const { library, account, activate, active, chainId } = useWeb3React();
  const navigate = useNavigate();
  const [option, setOption] = useState(0);
  console.log("option : ", option);

  const [items, setItems] = useState({
    nft: "",
    category: "",
    subCategory: "",
    email: "",
    address: "",
  });

  const message = `Welcome to EAS NFT! Click to sign in and accept the EAS NFT Terms of Service (https://accurentvc.com/terms-and-conditions) and Privacy Policy (https://accurentvc.com/privacy-policy). This request will not trigger a blockchain transaction or cost any gas fees. Your authentication status will reset after 24 hours.`;

  const setProvider = (type) => {
    localStorage.setItem("provider", type);
  };

  const signMessage = async () => {
    if (!library) return;
    try {
      const signature = await library.provider.request({
        method: "personal_sign",
        params: [message, account],
      });
      const address = account.toLowerCase();
      verify(message, signature, address);
    } catch (error) {
      console.log(error);
    }
  };

  const verify = async (msg, sig) => {
    if (!library) return;
    try {
      const actualAddress = await library.provider.request({
        method: "personal_ecRecover",
        params: [msg, sig],
      });

      const add = account.toLowerCase();

      if (actualAddress !== add) {
        Swal.fire("error", "Not a Valid Address", "decline");
      } else {
        if (localStorage.getItem("submitOption")) {
          submitForm(add);
        } else {
          axios.get(`api/verifyUser/${add}`).then((res) => {
            console.log("Verification response:", res.data); // Log the verification response
            Swal.fire("success", res.data.message, "success");
          });
          localStorage.setItem("user_id", add);
          window.localStorage.setItem("auth", true);
          window.location.reload();
          toggleBtn();
        }
      }
    } catch (e) {
      console.log("Error in verify:", e);
    }
  };

  const submitForm = () => {
    let formData = new FormData();
    formData.append("nfts", localStorage.getItem("nfts"));
    formData.append("referral", localStorage.getItem("referral"));
    formData.append("category", localStorage.getItem("category"));
    formData.append("subCategory", localStorage.getItem("sub-category"));
    formData.append("email", localStorage.getItem("email"));
    formData.append("address", account.toLowerCase());
    axios.post("/api/nft", formData).then((res) => {
      if (res.data.status === 200) {
        localStorage.setItem("user_id", account.toLowerCase());
        var itemsToRemove = [
          "nfts",
          "email",
          "category",
          "sub-category",
          "submitOption",
          "referral",
        ];
        itemsToRemove.forEach(function (item) {
          localStorage.removeItem(item);
        });
        Swal.fire("success", res.data.message, "success");
        navigate("/account/my-nft");
        window.location.reload();
      } else {
        console.log(res.data.message);
      }
    });
  };

  const handleMetamask = async () => {
    try {
      console.log("Handling MetaMask connection...");

      // Check if MetaMask is installed
      if (typeof window.ethereum === "undefined") {
        console.log("MetaMask is not installed.");
        window.open(`https://metamask.app.link/dapp/${baseUrl}${pagelocation}`);
        return;
      }

      await activate(connectors.injected);
      toggleHandleWallet();
      toggleBtn();
      setProvider("injected");
    } catch (error) {
      console.log("User canceled login.");
      setProvider("");
    }
  };

  const handleCoinBase = async () => {
    const { ethereum } = window;
    if (!ethereum?.providers) {
      return undefined;
    }

    console.log("Handling Coinbase Wallet connection...");
    activate(connectors.coinbaseWallet);
    setProvider("coinbaseWallet");
    toggleHandleWallet();
    toggleBtn();
  };

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(80001) }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [mumbai],
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const mumbai = {
    chainId: toHex(80001),
    chainName: "Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://mumbai.polygonscan.com/"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  };

  const changeAccount = async () => {
    navigate("/");
    toggleBtn();
  };
  useEffect(() => {
    if (active) {
      switchNetwork();
    }
    if (active) {
      window.ethereum.on("accountsChanged", changeAccount);
    }
  }, [active]);

  useEffect(() => {
    if (opt == 2) {
      localStorage.setItem("submitOption", 2);
    }
  }, []);

  useEffect(() => {
    const provider = localStorage.getItem("provider");
    if (provider) {
      activate(connectors[provider]);
    }
    console.log(provider);
  }, []);

  return (
    <>
      {walletConnect && (
        <div className="wallet_model">
          <div className="overlay2"></div>
          <div className="modal-content wallet-connect-content">
            <div className="modal-header flex-column text-center">
              <h5 className="modal-title">Connect to your Wallet</h5>
              <p>
                If you don't have a wallet, you can select a provider from the
                list below and create one now.{" "}
              </p>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  toggleHandleWallet();
                  navigate("/");
                }}
              ></button>
            </div>
            <div className="modal-body">
              <div className="wallet-content-wrapper d-flex flex-column gap-3">
                <button
                  onClick={handleMetamask}
                  className="connect-wallet-item d-flex align-items-center flex-column gap-2 justify-content-center"
                >
                  <div className="wallet-img">
                    <Image width={60} height={60} src="/images/header/metamask.png" />
                  </div>
                  <h4>Metamask</h4>
                  <span>Connect to your Metamask</span>
                </button>
                <button
                  onClick={() => {
                    handleCoinBase();
                    setProvider("coinbaseWallet");
                  }}
                  className="connect-wallet-item d-flex align-items-center flex-column gap-2 justify-content-center"
                >
                  <div className="wallet-img">
                    <Image width={60} height={60} src="/images/header/coinbase.png" />
                  </div>
                  <h4>Coinbase Wallet</h4>
                  <span>Connect to your Coinbase Wallet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <WelcomeToEasNftWallet
        toggleHandleWallet={toggleBtn}
        signMessage={signMessage}
        easNftWallet={easNftWallet}
      />
    </>
  );
};

export default WalletConnet;
