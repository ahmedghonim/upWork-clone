import { RiStarSFill } from "react-icons/ri";
import imageT from "../../images/resource/news-1.jpg";
import imageS from "../../images/resource/company-logo/2-5.png";
import { BsBookmarkCheckFill, BsBookmarkDash } from "react-icons/bs";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
export default function Card() {
  const [io, setIo] = useState(false);

  return (
    <div className="news-block ">
      <div className="inner-box border border-1">
        <div className="image-box">
          <figure className="image">
            <img src={imageT} alt="" />
          </figure>
        </div>
        <div className="lower-content">
          <div className="mb-3">
            <div className="content d-flex gap-4 align-items-center">
              <span className="company-logo border rounded-circle border-1">
                <img
                  className=" border rounded-circle border-1"
                  src={imageS}
                  alt=""
                />
              </span>
              <h3 className="p-0 m-0">
                <a href="blog-single.html">Name of FreeLancer</a>
              </h3>
            </div>
          </div>

          <h3>
            <a href="blog-single.html">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            </a>
          </h3>
          <div className=" d-flex justify-content-between align-items-center">
            <div>
              <span className="d-flex align-items-center ">
                <RiStarSFill className="fs-5 text-orange" />
                <span> 4</span>
                <span className="mx-2">(2K)</span>
              </span>
            </div>
            <div>
              <IoCheckmarkDoneCircleOutline /> <small>Delver At 5 day </small>
            </div>
          </div>

          <div className="hr mt-4 d-flex justify-content-between align-items-center">
            <button className="m-4" onClick={() => setIo(!io)}>
              {io ? (
                <BsBookmarkCheckFill className="fs-3 text-primary" />
              ) : (
                <BsBookmarkDash className="fs-3 text-primary" />
              )}
            </button>
            <div>
              <span className="icon flaticon-money">From</span>
              <span>
                <MdOutlineAttachMoney className="fs-5" /> 45k
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
