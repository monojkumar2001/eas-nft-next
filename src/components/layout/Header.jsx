import { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
// import { useWeb3React } from "@web3-react/core";
import ConnectBtn from "../Collection/ConnectBtn";

function Header() {
  // const { active ,deactivate} = useWeb3React();

  const [isSticky, setSticky] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  const [activeDropdown, setActiveDropdown] = useState(0);
  const toggleActiveDrop = (index) => {
    setActiveDropdown(index);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const logout = () => {
  //   if (active) {
  //     return (
  //       <li onClick={disconnect}>
  //         <Link to={"/"}>Logout</Link>
  //       </li>
  //     );
  //   }
  // };


  const disconnect = () => {
    deactivate();
    window.localStorage.setItem("provider", undefined);
    localStorage.removeItem("provider");
    localStorage.removeItem("user_id");
    localStorage.removeItem("auth")
    window.location.reload()
    Router("/")
  };

  return (
    // <!-- =====================Navigation=========== -->
    <>
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="header-wrapper">
        <nav className="navigation">
          <div className="logo logo-nav">
            <Link href="/" className="logo-link">
              <img src="/images/logo.svg" alt="" />
            </Link>
          </div>

          <div className={`menu ${sidebarActive ? "active" : ""}`}>
            <div className="close-menu" onClick={() => setSidebarActive(false)}>
              <img src="/images/close.svg" alt="" />
            </div>
            <ul className="menu-nav-ul">
              <div className="mb-logo">
                <Link href="/" className="logo-link">
                  <img src="/images/logo.svg" alt="" className="logo-img" />
                </Link>
              </div>
              <div className="left-side d-flex algin-items-center">
                <li className="nav-list">
                  <Link
                    href="/"
                    className="nav-link home-icons"
                    onClick={_toggleSidebar}
                  >
                    <span>
                      <img src="/images/header/home-icon.svg" alt="" />
                    </span>
                  </Link>
                </li>
                <li
                  className={
                    activeDropdown === 1 ? "nav-list active" : "nav-list"
                  }
                  onClick={() => {
                    if (activeDropdown === 1) {
                      toggleActiveDrop(0);
                    } else toggleActiveDrop(1);
                  }}
                >
                  <Link href="#">NFT Collections</Link>
                  <div className="dp-menu">
                    <ul className="dp-menu-ul">
                      <li onClick={_toggleSidebar}>
                        <Link href={"/nft-collection"}>NFT Collection</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link href={"/my-nft-list"}>My NFT List</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link href={"/marketplace"}>Marketplace</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={
                    activeDropdown === 2 ? "nav-list active" : "nav-list"
                  }
                  onClick={() => {
                    if (activeDropdown === 2) {
                      toggleActiveDrop(0);
                    } else toggleActiveDrop(2);
                  }}
                >
                  <Link href="#">Resources</Link>
                  <div className="dp-menu">
                    <ul className="dp-menu-ul">
                      <li onClick={_toggleSidebar}>
                        <Link href={"/referral"}>Referral</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link href={"/nft-use-cases"}>NFT Use Cases</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link href={"/nft-pricing"}>NFT Pricing</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link href={"/docs"}>Knowledge Base & FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={
                    activeDropdown === 3 ? "nav-list active" : "nav-list"
                  }
                  onClick={() => {
                    if (activeDropdown === 3) {
                      toggleActiveDrop(0);
                    } else toggleActiveDrop(3);
                  }}
                >
                  <Link href="#">About</Link>
                  <div className="dp-menu">
                    <ul className="dp-menu-ul">
                      <li onClick={_toggleSidebar}>
                        <Link href={"/about"}>Our Mission</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link href={"/contact"}>Contact</Link>
                      </li>
                      <li onClick={_toggleSidebar}>
                        <Link href={"/careers"}>Careers</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-list" onClick={_toggleSidebar}>
                  <Link href="/news" className="nav-link">
                    News
                  </Link>
                </li>
                <li
                  className={
                    activeDropdown === 4 ? "nav-list active" : "nav-list"
                  }
                  onClick={() => {
                    if (activeDropdown === 4) {
                      toggleActiveDrop(0);
                    } else toggleActiveDrop(4);
                  }}
                >
                  <Link href="#">My Account</Link>

                  <div className="dp-menu">
                    <ul className="dp-menu-ul">
                      <li onClick={_toggleSidebar}>
                        <Link href={"/account"}>Account Dashboard</Link>
                      </li>
                     {/* {logout()} */}
                    </ul>
                  </div>
                </li>
              </div>

              <div className="left-side d-flex algin-items-center">
                {/* <ConnectBtn /> */}
              </div>
            </ul>
          </div>
          <div className="show-nav" onClick={_toggleSidebar}>
            <img src="/images/menu.svg" alt="" />
          </div>
        </nav>
      </div>
    </header>
    </>
    // {/* <!-- =====================Navigation end =========== --> */}
  );
}
export default Header;
