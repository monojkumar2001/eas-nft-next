import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import '../../styles/faq-blog-sub.css';
import axios from "axios";
const BlogsSubscribe = () => {
  const [inputField, setInputField] = useState({
    email: "",
    error_log: [],
  });

  const inputsHandler = (e) => {
    e.persist();
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const allInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", inputField.email);
    axios.post("api/subscriber", formData).then((res) => {
      if (res.data.status === 200) {
        alert(res.data.msg);
        setInputField({
          email: "",
          error_log: [],
        });
      } else {
        console.log(res.data.data);
        setInputField({
          ...inputField,
          error_log: res.data.data,
        });
      }
    });
  };
  return (
    <>
      <div className="blog_sub_item mt-4">
        <div className="blog_Learn_item">
          <div className="blog_logo_img">
            <Image
              width={200}
              height={75}
              src="/images/footer/footer-logo.svg"
              alt="logo img"
            />
          </div>
          <Link href={"/"} className="subscribe_item">
            <h3>Buy a Charity NFT & Donate to your Favorite Cause</h3>
            <button className="custom-btn">Learn more</button>
          </Link>
        </div>
        <div className="blog_sub_update">
          <h5>Subscribe to Updates</h5>
          <form onSubmit={allInfoSubmit}>
            <div className="footer-email-fluid-2 mt-4">
              <input
                type="email"
                required
                name="email"
                onChange={inputsHandler}
                value={inputField.email}
                placeholder="Email*"
              />
            </div>
            <small style={{ color: "red" }}>{inputField.error_log.email}</small>
            <div className="footer-email-submit-btns mt-4 text-center">
              <button type="submit" className="custom-btn">I want in!</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogsSubscribe;
