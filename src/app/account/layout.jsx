'use client';
import React, { useState} from "react";
import "../../styles/dashboard.css";
import "../../styles/ticket.css"
import Link from "next/link";
import SidebarDashboard from "@/components/Dashboard/SidebarDashboard";
import Image from "next/image";
const layout = ({children}) => {
    const [filterActive, setFilterActive] = useState([false]);
    const toggleFilterMenu = () => {
      setFilterActive(!filterActive);
    };
    const [activeFilter, SetActiveFilter] = useState(1);
    const toggleFilter = (index) => {
      SetActiveFilter(index);
    };
  return (
    <>
       <div className="dashboard">
        <div className="container-fluid">
          <div className="row">
    <SidebarDashboard toggleFilter={toggleFilter} activeFilter={activeFilter} filterActive={filterActive} toggleFilterMenu={toggleFilterMenu} />
            <div className="col-lg-10 col-md-12 ">
              <div className={`${filterActive ? "" : "active"} overlays`}></div>
              <div className="dashboard-wrapper">
                <div className="filter-menu-item-con">
                  <button
                    className="filter-menu-icon"
                    onClick={toggleFilterMenu}
                  >
                    <Image width={18} height={19}  src="/images/dashboard/filter-menu.svg" alt="icon" />
                  </button>
                </div>
                {children}
              </div>
        
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default layout