'use client';
import "../../styles/WelcomeEasWallect.css"
import {useNavigate} from 'next/navigation';
import Link from 'next/link';
import { useWeb3React } from '@web3-react/core';

const WelcomeToEasNftWallet = ({toggleHandleWallet,easNftWallet,signMessage}) => {
    const {deactivate} = useWeb3React()
    const navigate = useNavigate()
    const disconnect = () => {
        deactivate();
        window.localStorage.setItem("provider", undefined);
        localStorage.removeItem("provider");
        localStorage.removeItem("user_id");
        localStorage.removeItem("auth")
        navigate("/")
        toggleHandleWallet()
      };
    
  
  return (
    <>
    {/* <button className='custom-btn' onClick={toggleHandleWallet}>Accept and sign</button> */}
    {
        easNftWallet && (
            <div className="welcome_model">
                <div className="overlay-4">
                    <div className="welcome-wallet-content">
                     <div className="welcome-content-wrapper">
                        <button className='btn-close' onClick={toggleHandleWallet}></button>
                     <div className="welcome-wallet-img">
                            <img src="/images/logo.png" alt="" />
                        </div>
                        <h3>Welcome to EAS NFT</h3>
                        <p>By connecting your wallet and using EAS NFT, you agree to our <Link to="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms of Service</Link> and <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link> </p>
                    <div className="welcome-btn-items d-flex align-items-center justify-content-center gap-3">
                        <button className='custom-btn cancel-btn' onClick={disconnect}>Cancel</button>
                        <button className='custom-btn' onClick={signMessage}>Accept and sign</button>
                    </div>
                     </div>
                    </div>
                </div>
            </div>
        )
    }
    </>
  )
}

export default WelcomeToEasNftWallet