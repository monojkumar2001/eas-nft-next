
import { AiOutlineMail } from "react-icons/ai";
import {
  FaShareAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const ContactLeftItem = () => {
  return (
    <>
      <div className="contact-left">
        <span className="focus-color">Get in Touch</span>
        <h3 className="section-title">Contact Ethereum Address Service</h3>
        <p className="mt-4">Questions or comments? Please let us know how we can assist you.</p>
        <div className="contact-social-media-items row mt-4 ">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="contact-social-media-item d-flex align-items-start gap-3">
              <div className="social-media-icon">
                <AiOutlineMail />
              </div>
              <div className="social-item-content">
                <h5>Email</h5>
              <span>  <a href="mailto:team@easnft.com">team@easnft.com</a></span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="contact-social-media-item d-flex align-items-start gap-3">
              <div className="social-media-icon">
                <FaShareAlt />
              </div>
              <div className="social-item-content">
                <h5>Follow Us</h5>
                <div className="social-contact-list d-flex align-items-center gap-3">
                  <Link href="https://twitter.com/eas_nft" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </Link>
                  <Link href="https://www.facebook.com/easNFT/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Feasnft%2Fabout%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link href="https://www.instagram.com/eas_nft/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="contact-social-media-item d-flex align-items-start gap-3">
              <div className="social-media-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="social-item-content">
                <h5>Office</h5>
                <p>33 Irving Pl #9022,</p>
                <p>New York, NY 10003</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="contact-social-media-item d-flex align-items-start gap-3">
              <div className="social-media-icon">
                <FaPhoneAlt />
              </div>
              <div className="social-item-content">
                <h5>Phone</h5>
                <span><a href="tel:+19173480223">+1 (917) 348-0223</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opensea-img-item d-flex justify-content-center mt-4">
         <Link href={'https://opensea.io/collection/ethereum-address-service'} target="_blank" className="opensea-imgs">
            <Image width={302} height={107} src="/images/contact/opensea.webp" />
           </Link>
         </div>
    </>
  );
};

export default ContactLeftItem;
