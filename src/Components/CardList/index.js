import React, { useState } from "react";
import { BsBookmarkCheckFill, BsBookmarkDash } from "react-icons/bs";
import {
  MdOutlineAttachMoney,
} from "react-icons/md";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { BiCategoryAlt, BiTimeFive } from "react-icons/bi";

function CardList() {
  const [io, setIo] = useState(false);
  return (
    <div className="job-block-two col-lg-12">
      <div className="inner-box">
        <div className="content ps-0">
          {/* <span className="company-logo">
            <img
              alt=""
            />
          </span> */}
          <h4>
            <NavLink to="/job-details/50004">
              Software Engineer (Android), Libraries
            </NavLink>
          </h4>
          <ul className="m-0 p-0 job-info">
            <li className="ps-0">
              <span className="  icon flaticon-clock-3"></span>
              <BiTimeFive /> 11 hours ago
            </li>
            <li>
              <span className="icon flaticon-money"></span>
              <BiCategoryAlt /> proposal (222)
            </li>
            <li>
              <span className="icon flaticon-money"></span>
              <MdOutlineAttachMoney className="fs-5" /> $35k - $45k
            </li>
          </ul>
        </div>
        <ul className="job-other-info">
          <li className="time">Full webb site creation</li>
          <li className="bg-secondary text-white">Blog</li>
          <li className="privacy">Open</li>
        </ul>
        <button className="bookmark-btn">
          <span
            onClick={() => setIo(!io)}
            className="flaticon-bookmark d-flex justify-content-center align-items-center"
          >
            {io ? (
              <BsBookmarkCheckFill className="fs-5 text-primary" />
            ) : (
              <BsBookmarkDash className="fs-5 text-primary" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
}

export default CardList;
