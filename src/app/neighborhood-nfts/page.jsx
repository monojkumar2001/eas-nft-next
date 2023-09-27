import NeighborhoodHero from '@/components/NeighborhoodNfts/NeighborhoodHero'
import NeighborhoodItem from '@/components/NeighborhoodNfts/NeighborhoodItem'
import React from 'react';
import '../../styles/NeighborhoodItem.css';
import NeighborhoodNft from '@/components/NeighborhoodNfts/NeighborhoodNft';
const NeighborhoodNfts = () => {
  return (
    <>
    <main>
        {/* hero */}
        <NeighborhoodHero/>
{/* Neighborhood Nft */}

<NeighborhoodNft/>

        {/* Neighborhood Invest  */}
        <div className="neighborhood_invest cpy-6">
            <div className="container">
                <div className="neighborhood_invest_wrapper">
                    <div className="neighborhood_invest_header">
                        <span className="sub-title">
                        BECOME AN NFT LANDLORD
                        </span>
                        <h1 className='section-title'> Why invest in a neighborhood NFT </h1>
                    </div>
                    <NeighborhoodItem/>

                </div>
            </div>
        </div>

        {/* ====  */}
    </main>
    </>
  )
}

export default NeighborhoodNfts