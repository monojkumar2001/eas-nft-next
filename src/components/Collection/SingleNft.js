
import NFTModelCongratulations from "./NFTModelCongratulations";
import { convertIpfsAddress } from "../../app/utils";
import Link from "next/link";
const SingleNft = (props) => {
  return (
    <>
      <Link to={`/nft-details/${props.id}`}>
        <div
          key={props.key}
          className="images-card w-100 d-flex align-items-center justify-content-between flex-column"
        >
          <div className="nft-imgs">
            <img src={convertIpfsAddress(props.image)} alt="" />
          </div>
          <div className="nft-titles">
            <p>{props.name}</p>
            {/* <span>NO. {props.id}</span> */}
          </div>

          <Link
            href={`/nft-details/${props.id}`}
            className="buy-nft-btn w-100 custom-btn"
          >
            Buy NFT
          </Link>
        </div>
      </Link>
    </>
  );
};

export default SingleNft;
