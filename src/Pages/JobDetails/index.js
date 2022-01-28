import React, { useState } from "react";
import { BiCategoryAlt, BiTimeFive } from "react-icons/bi";
import { MdLocationPin, MdOutlineAttachMoney } from "react-icons/md";
import {
  BsBookmarkCheckFill,
  BsBookmarkDash,
  BsTwitter,
  BsFillFileEarmarkCodeFill,
  BsImages,
} from "react-icons/bs";
import { FaFacebook, FaFilePdf, FaLinkedin } from "react-icons/fa";
import { AiFillFile, AiFillFileImage } from "react-icons/ai";

import avatar from "../../images/A.jpg";
import { RiStarSFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import ModalButton from "../../Components/ModalProposal";
function JobDetails() {
  const [io, setIo] = useState(false);
  const [question, setQuestion] = useState();
  const [questions, setQuestions] = useState([]);

  console.log(questions);
  return (
    <section className="job-detail-section">
      {/*Upper Box*/}
      <div className="upper-box">
        <div className="auto-container">
          {/*Job Block*/}
          <div className="job-block-seven">
            <div className="inner-box">
              <div className="content">
                <span className="company-logo">
                  <img src="images/resource/company-logo/5-1.png" alt="" />
                </span>
                <h4>
                  <a href="#">Product Designer / UI Designer</a>
                </h4>
                <ul className="job-info">
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
                <ul className="job-other-info">
                  <li className="time">Full webb site creation</li>
                  <li className="bg-secondary text-white">Blog</li>
                  <li className="privacy">Open</li>
                </ul>
              </div>
              {/* Modal */}
              

              <div className="btn-box">
                {/* Button trigger modal */}
               <ModalButton title="Proposal" MTitle="Proposal"/>
                <button className="m-4" onClick={() => setIo(!io)}>
                  {io ? (
                    <BsBookmarkCheckFill className="fs-3 text-primary" />
                  ) : (
                    <BsBookmarkDash className="fs-3 text-primary" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="job-detail-outer p-0">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="job-detail">
                <h4>Job Description</h4>
                <p>
                  As a Product Designer, you will work within a Product Delivery
                  Team fused with UX, engineering, product and data talent. You
                  will help the team design beautiful interfaces that solve
                  business challenges for our clients. We work with a number of
                  Tier 1 banks on building web-based applications for AML, KYC
                  and Sanctions List management workflows. This role is ideal if
                  you are looking to segue your career into the FinTech or Big
                  Data arenas.
                </p>
                <dev className="pb-3 d-flex gap-1 fs-5 gap-4">
                  <span>
                    <FaFilePdf />
                  </span>

                  <span>
                    <BsFillFileEarmarkCodeFill />
                  </span>
                  <span>
                    <BsImages />
                  </span>
                  <span>
                    <AiFillFile />
                  </span>
                </dev>
                <div className="row sidebar-widget">
                  <div className="col">
                    <h4>Plugin Types</h4>
                    <dev className="tag-list d-flex gap-1">
                      <span>
                        <a href="#">app</a>
                      </span>
                      <span>
                        <a href="#">administrative</a>
                      </span>
                      <span>
                        <a href="#">android</a>
                      </span>
                      <span>
                        <a href="#">wordpress</a>
                      </span>
                      <span>
                        <a href="#">design</a>
                      </span>
                      <span>
                        <a href="#">react</a>
                      </span>
                    </dev>
                  </div>
                  <div className="col">
                    <h4>WordPres Plugin</h4>{" "}
                    <dev className="tag-list d-flex gap-1">
                      <span>
                        <a>app</a>
                      </span>
                      <span>
                        <a>administrative</a>
                      </span>
                      <span>
                        <a>android</a>
                      </span>
                      <span>
                        <a>wordpress</a>
                      </span>
                      <span>
                        <a>design</a>
                      </span>
                      <span>
                        <a>react</a>
                      </span>
                    </dev>
                  </div>
                </div>
                <div>
                  <h4>Clarification Board</h4>
                </div>
                <div className="comment-form default-form">
                  <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <label>Your Question</label>
                      <textarea
                        value={question}
                        name="message"
                        placeholder="Write Comment"
                        onChange={(e) => setQuestion(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        name="submit-form"
                        onClick={() => {
                          setQuestions((prevState) => [...prevState, question]);
                          setQuestion("");
                        }}
                      >
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar">
                <div className="sidebar-widget company-widget">
                  <div className="widget-content">
                    <div className="company-title">
                      <div className="company-logo">
                        <img src={avatar} alt="" />
                      </div>
                      <h5 className="company-name">Name</h5>
                      <span className="d-flex align-items-center ">
                        <RiStarSFill className="fs-5 text-orange" />
                        <span> 4</span>
                        <span className="mx-2">(2K)</span>
                      </span>
                    </div>

                    <ul className="company-info ps-0">
                      <li>
                        Project Completed: <span>10</span>
                      </li>
                      <li>
                        <div>
                          <span className="d-block text-black text-left">
                            Freelancers{" "}
                          </span>
                          <span className="d-block text-black">
                            Worked With :
                          </span>
                        </div>
                        <span>100</span>
                      </li>
                      <li>
                        Last Project <span>2011</span>
                      </li>
                      <li>
                        Projects Awarded: <span>123 </span>
                      </li>
                      <li>Hiring for similar work?</li>
                    </ul>

                    <div className="btn-box">
                      <a href="#" className="theme-btn btn-style-three">
                        Post Jobs Like This
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sidebar-widget pb-1">
                  <div className="widget-content">
                    <h5 className="company-name">Share Project</h5>
                    <ul className="ps-0 company-info">
                      <li className="mt-3">
                        <input
                          className="btn-info px-2"
                          value="https://tesdt.tstts"
                          readOnly
                        />
                      </li>
                    </ul>

                    <div className="other-options">
                      <div className="social-share">
                        <a href="#" className="facebook fs-5 px-3">
                          <FaFacebook />
                        </a>
                        <a href="#" className="twitter fs-5  px-3">
                          <BsTwitter />
                        </a>
                        <a href="#" className="linkedin fs-5  px-3">
                          <FaLinkedin />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-widget company-widget">
                  <div className="widget-content">
                    <ul className="company-info ps-0">
                      <li>
                        <span className="text-black d-flex justify-content-center">
                          <MdLocationPin className="fs-4" /> London, UK
                        </span>
                      </li>
                      <li>
                        Member since: <span>Jan 24,2020</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobDetails;
