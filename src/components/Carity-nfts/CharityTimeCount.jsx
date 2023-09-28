'use client';
import Link from "next/link";
import { useState } from "react";

const CharityTimeCount = () => {
  const [day1, setDay1] = useState(0);
  const [day2, setDay2] = useState(0);

  const [hour1, setHour1] = useState(0);
  const [hour2, setHour2] = useState(0);
  const [hour3, setHour3] = useState(0);

  const [minute1, setMinute1] = useState(0);
  const [minute2, setMinute2] = useState(0);

  const [second1, setSecond1] = useState(0);
  const [second2, setSecond2] = useState(0);

  // Timer
  const countDown = () => {
    const dueDate = new Date("december 28, 2023 00:00").getTime();
    const currentDate = new Date().getTime();

    const remainings = dueDate - currentDate;

    if (remainings > 0) {
      let second = 1000;
      let minute = second * 60;
      let hour = minute * 60;
      let day = hour * 24;

      // Remainings
      let remainingDay = Math.floor(remainings / day);
      let remainingHour = Math.floor((remainings % day) / hour);
      let remainingMinute = Math.floor((remainings % hour) / minute);
      let remainingSecond = Math.floor((remainings % minute) / second);

      // Day
      let dayLength = remainingDay.toString().length;

      if (dayLength === 1) {
        setDay1(0);
        setDay2(remainingDay);
      } else if (dayLength === 2) {
        remainingDay = remainingDay.toString().split("");

        setDay1(remainingDay[0]);
        setDay2(remainingDay[1]);
      }

      // Hour
      let hourLength = remainingHour.toString().length;

      if (hourLength === 1) {
        setHour1(0);
        setHour2(remainingHour);
      } else if (hourLength === 2) {
        remainingHour = remainingHour.toString().split("");

        setHour1(remainingHour[0]);
        setHour2(remainingHour[1]);
      }

      // Minute
      let minuteLength = remainingMinute.toString().length;

      if (minuteLength === 1) {
        setMinute1(0);
        setMinute2(remainingMinute);
      } else if (minuteLength === 2) {
        remainingMinute = remainingMinute.toString().split("");

        setMinute1(remainingMinute[0]);
        setMinute2(remainingMinute[1]);
      }

      // Second
      let secondLength = remainingSecond.toString().length;

      if (secondLength === 1) {
        setSecond1(0);
        setSecond2(remainingSecond);
      } else if (secondLength === 2) {
        remainingSecond = remainingSecond.toString().split("");

        setSecond1(remainingSecond[0]);
        setSecond2(remainingSecond[1]);
      }
    } else {
      setDay1(0);
      setDay2(0);

      setHour1(0);
      setHour2(0);

      setMinute1(0);
      setMinute2(0);

      setSecond1(0);
      setSecond2(0);
    }
  };

  setInterval(countDown, 1000);
  return (
    <>
      <div className="charity_time_right_side">
        <div className="charity_time_count w-100">
          <h4>Help Us Reach Our Charitable Donation Goal for Q3</h4>
          <div className="time_count_con d-flex align-items-center gap-3 justify-content-center">
            <div className="time_count_item d-flex align-items-center flex-column justify-content-center">
              <div className="d-flex align-items-center justify-content-center gap-1">
                <h5>{day1}</h5>
                <h5>{day2}</h5>
              </div>
              <span>days</span>
            </div>
            <h5>:</h5>
            <div className="time_count_item">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <h5>{hour1}</h5>
                <h5>{hour2}</h5>
              </div>
              <span>Hours</span>
            </div>
            <h5>:</h5>
            <div className="time_count_item">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <h5>{minute1}</h5>
                <h5>{minute2}</h5>
              </div>
              <span>Minutes</span>
            </div>
            <h5>:</h5>
            <div className="time_count_item">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <h5>{second1}</h5>
                <h5>{second2}</h5>
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
