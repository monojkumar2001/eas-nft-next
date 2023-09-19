import React from 'react'
import Link from 'next/link';
const SidebarDashboard = ({filterActive,toggleFilterMenu,toggleFilter, activeFilter}) => {
  return (
    <>
     <div className="col-lg-2 col-md-12 dashboard-left-site">
              <div className={`${filterActive ? "" : "active"} sidebar-filter`}>
                <div className="filter-close-menu" onClick={toggleFilterMenu}>
                  <img src="/images/dashboard/close.svg" alt="" />
                </div>
                <div className="dashboard-sideber-wrapper">
                  <div className="filter-items">
                    <div className="filter-list-items">
                      <div className="filter-list-item">
                        <Link href="/account"
                          className={
                            activeFilter === 1
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(1);
                          }}
                        >

                          <div 
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img src="/images/dashboard/account.svg" alt="" />
                            </div>
                            <span>Account Details</span>
                          </div>
                        </Link>
                      </div>
                      <div className="filter-list-item">
                        <Link   href={'/account/my-nft'}
                          className={
                            activeFilter === 2
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(2);
                          }}
                        >
                          <div
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img src="/images/dashboard/my-nft.svg" alt="" />
                            </div>
                            <span>My NFTs</span>
                          </div>
                        </Link>
                      </div>
                     
                      <div className="filter-list-item">
                        <Link href={'/account/claim-new-nft'}
                          className={
                            activeFilter === 4
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(4);
                          }}
                        >
                          <div  
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img src="/images/dashboard/claim.svg" alt="" />
                            </div>
                            <span>Claim New NFTs</span>
                          </div>
                        </Link>
                      </div>
                      <div className="filter-list-item">
                        <div className="filter-item-bar">
                          <div
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <Link href={"/docs"}>
                              <div className="filter-type d-flex gap-2 align-items-center">
                                <img
                                  src="/images/dashboard/knowledge.svg"
                                  alt=""
                                />
                                <span>Knowledge Base</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="filter-list-item">
                        <Link href={'/account/contact-us'}
                          className={
                            activeFilter === 6
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(6);
                          }}
                        >
                          <div 
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img src="/images/dashboard/contact.svg" alt="" />
                            </div>
                            <span>Contact Us</span>
                          </div>
                        </Link>
                      </div>
                      <div className="filter-list-item">
                        <Link href={'/account/ticket'}
                          className={
                            activeFilter === 7
                              ? "filter-item-bar active-filter-item-bar"
                              : "filter-item-bar"
                          }
                          onClick={() => {
                            toggleFilter(7);
                          }}
                        >
                          <div 
                            className="filter-left-items d-flex align-items-center gap-2 "
                            onClick={toggleFilterMenu}
                          >
                            <div className="filter-type">
                              <img src="/images/dashboard/ticket.svg" alt="" />
                            </div>
                            <span>Ticket</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default SidebarDashboard