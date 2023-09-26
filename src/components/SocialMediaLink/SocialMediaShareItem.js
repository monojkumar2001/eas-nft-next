import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialMediaShareItem = () => {
  return (
    <>
      <div className="social-media-link  d-flex algin-items-center gap-3">
        <Link href="/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </Link>
        <Link href="/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </Link>
        <Link href="/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </Link>
        <Link href="/" target="_blank" rel="noopener noreferrer">
          <FaPinterest />
        </Link>
      </div>
    </>
  );
};

export default SocialMediaShareItem;
