import React from "react";
import Link from "next/link";
import style from "../styles/NotFound.module.css";
const NotFound = () => {
  return (
    <>
      <div className={style.not_found_page}>
        <div className={style.not_found_page_wrapper}>
          <h2>404</h2>
          <h4>Page Not Found</h4>
          <p>Could not find requested resource</p>
          <Link href="/" className="custom-btn">Back To Home</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
