import Link from "next/link";
import React from "react";

const CharityTimeCount = () => {
  return (
    <>
      <div className="charity_time_right_side">
        <div className="charity_time_count w-100">
          <h4>Help Us Reach Our Charitable Donation Goal for Q3</h4>
          <div className="time_count_con d-flex align-items-center gap-3 justify-content-center">
            <div className="time_count_item d-flex align-items-center flex-column justify-content-center">
              <div className="d-flex align-items-center justify-content-center gap-1">
                <h4>0</h4>
                <h4>4</h4>
              </div>
              <span>days</span>
            </div>
            <h4>:</h4>
            <div className="time_count_item">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <h4>0</h4>
                <h4>4</h4>
              </div>
              <span>Hours</span>
            </div>
            <h4>:</h4>
            <div className="time_count_item">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <h4>0</h4>
                <h4>4</h4>
              </div>
              <span>Minutes</span>
            </div>
            <h4>:</h4>
            <div className="time_count_item">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <h4>0</h4>
                <h4>4</h4>
              </div>
              <span>seconds</span>
            </div>
          </div>
          <div className="charity_progress_bar d-flex justify-content-end align-items-end gap-3">
            <div className="charity-value w-100">
              <p>
                Goal: $<span>10,000</span>
              </p>
              <div className="progress_bar mt-3">
                <div className="bar_filled"></div>
              </div>
            </div>
            <div className="content_value">
              <p>
                $<span>545</span>
              </p>
            </div>
          </div>
          <div className="charity_btn_items">
            <button className="custom-btn">Buy a charity nft to donate</button>
          </div>
          <p className="charity-pra">
            All proceeds are donated in crypto in partnership with{" "}
            <span>
              <Link href={"/https://thegivingblock.com"}>
                The Giving Block.
              </Link>{" "}
            </span>
          </p>
        </div>
        <p className="mt-4">
          Questions?{" "}
          <span>
            {" "}
            <Link href={"/contact"}> Contact us.</Link>{" "}
          </span>{" "}
        </p>
      </div>
    </>
  );
};

export default CharityTimeCount;
