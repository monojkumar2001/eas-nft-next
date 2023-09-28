'use client';
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import {RiLockPasswordLine } from "react-icons/ri";

const LoginInfo = () => {
  return (
    <>
      <div className="info-wrapper">
        <form action="">
          <div className="info-form-items d-flex flex-column gap-3">
            <div className="input-fluid-item">
              <span>
                <FaRegUser />
              </span>
              <input type="text" placeholder="Username / Email" />
            </div>
            <div className="input-fluid-item">
              <span>
                <RiLockPasswordLine />
              </span>
              <input type="password" placeholder="Password" />
            </div>
            <div className="login-forget-password d-flex align-items-center justify-content-between">
                <div className="remember-item d-flex align-items-center gap-2">
                    <input type="checkbox" />
                    <span>Remember me</span>
                </div>
                <Link href="/forget">Forgot Password ?</Link>
            </div>
            <button className="custom-btn" type="submit" >Sign In</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginInfo;
