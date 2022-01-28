import React, { useState } from "react";
import imageS from "../../images/resource/company-logo/2-5.png";
import CarouselImg from "../../Components/Carousal";
import {
  MdDownloadDone,
  MdFileDownloadDone,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdLocationPin,
  MdOutlineTimer,
} from "react-icons/md";
import {
  BsBookmarkCheckFill,
  BsBookmarkDash,
  BsTwitter,
  BsGraphUp,
} from "react-icons/bs";
import { FaFacebook, FaFilePdf, FaLinkedin } from "react-icons/fa";
import { AiFillFile, AiFillFileImage } from "react-icons/ai";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

import avatar from "../../images/A.jpg";
import { RiStarSFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import ModalButton from "../../Components/ModalProposal";
import AccordionLg from "../../Components/AccordionLg";
import { Accordion } from "react-bootstrap";
function ProjectDetails() {
  const [io, setIo] = useState(false);
  const [question, setQuestion] = useState();
  const [questions, setQuestions] = useState([]);
  const [qA, setQA] = useState(true);
  const [qB, setQB] = useState(true);
  const [qC, setQC] = useState(true);
  const [tA, setTA] = useState(true);
  const [tB, setTB] = useState(false);
  const [tC, setTC] = useState(false);

  return (
    <section className="job-detail-section">
      {/*Upper Box*/}
      <div className="upper-box">
        <div className="auto-container">
          <ul className="page-breadcrumb">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>project</li>
          </ul>
          {/*Job Block*/}
          <div className="job-block-seven ">
            <div className="inner-box ">
              <div>
                <span className="company-logo ">
                  <img src="images/resource/company-logo/5-1.png" alt="" />
                </span>
                <h4>
                  <a href="#">Product Designer / UI Designer</a>
                </h4>
                <ul className=" d-flex  gap-5 align-items-center  p-0 m-0 ">
                  <li className="ps-0 ms-0">
                    <img
                      className=" border rounded-circle border-1"
                      src={imageS}
                      alt=""
                    />

                    <a href="blog-single.html">Name of FreeLancer</a>
                  </li>
                  <li className="ps-0">
                    <span className="d-flex align-items-center ">
                      <RiStarSFill className="fs-5 text-orange" />
                      <span> 4</span>
                      <span className="mx-2">(2K reviews)</span>
                    </span>
                  </li>
                  <li>
                    <span className="icon flaticon-money"></span>
                    <BsGraphUp />
                    Top Rated
                  </li>
                  <li>
                    <span className="icon flaticon-money"></span>
                    (3) contracts in progress
                  </li>
                </ul>
              </div>
              {/* Modal */}

              <div className="btn-box">
                {/* Button trigger modal */}
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
                <CarouselImg />
                <div className="job-detail mt-5">
                  <h3>Project details</h3>
                  <p>
                    As a Product Designer, you will work within a Product
                    Delivery Team fused with UX, engineering, product and data
                    talent. You will help the team design beautiful interfaces
                    that solve business challenges for our clients. We work with
                    a number of Tier 1 banks on building web-based applications
                    for AML, KYC and Sanctions List management workflows. This
                    role is ideal if you are looking to segue your career into
                    the FinTech or Big Data arenas.
                  </p>

                  <div className="row sidebar-widget">
                    <h4>Here Is What I Offer?</h4>
                    <div className="col">
                      <h4>Website Specialization</h4>
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
                      <h4>Supported Plugin Types</h4>{" "}
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
                    <div className="col">
                      <h4>WordPress Plugins</h4>
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
                  <div className="table-outer">
                    <table className="default-table invoice-table">
                      <thead>
                        <tr>
                          <th>
                            Service <br /> Tiers
                          </th>
                          <th className="text-center">
                            Starter <br /> $100
                          </th>
                          <th className="text-center">
                            Standard
                            <br /> $250
                          </th>
                          <th className="text-center">
                            Advanced <br />
                            $495
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Delivery Time</td>
                          <td>3 days</td>
                          <td>5 days</td>
                          <td>7 days</td>
                        </tr>
                        <tr>
                          <td>Delivery Time</td>
                          <td>3 days</td>
                          <td>5 days</td>
                          <td>7 days</td>
                        </tr>
                        <tr>
                          <td>Delivery Time</td>
                          <td>3 days</td>
                          <td>5 days</td>
                          <td>7 days</td>
                        </tr>
                        <tr>
                          <td>Number of Revisions</td>
                          <td>
                            <MdDownloadDone />
                          </td>
                          <td>
                            <MdDownloadDone />
                          </td>
                          <td>
                            <MdDownloadDone />
                          </td>
                        </tr>
                        <tr>
                          <td>Number of Revisions</td>
                          <td>
                            <MdDownloadDone />
                          </td>
                          <td>-</td>
                          <td>
                            <MdDownloadDone />
                          </td>
                        </tr>
                        <tr>
                          <td>Number of Revisions</td>
                          <td>
                            <MdDownloadDone />
                          </td>
                          <td>
                            <MdDownloadDone />
                          </td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Question */}
                  <AccordionLg  />
                 
                </div>
                <div className="candidate-block-three p-0 mt-4">
                  <div className="inner-box">
                    <div className="content">
                      <figure className="image">
                        <img src={avatar} alt="" />
                      </figure>
                      <h4 className="name">
                        <a href="#">Darlene Robertson</a>
                      </h4>
                      <ul className="candidate-info">
                        <li className="designation">UI Designer</li>
                        <li>
                          <span className="icon flaticon-map-locator"></span>{" "}
                          London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-money"></span> $99 /
                          hour
                        </li>
                      </ul>
                      <ul className="post-tags">
                        <li>
                          <a href="#">App</a>
                        </li>
                        <li>
                          <a href="#">Design</a>
                        </li>
                        <li>
                          <a href="#">Digital</a>
                        </li>
                      </ul>
                    </div>
                    <div className="btn-box">
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                      <a href="#" className="theme-btn btn-style-three">
                        <span className="btn-title">View Profile</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="comment-box">
                  <h4>Comment</h4>
                  {/* <!-- Comment --> */}
                  <div className="comment">
                    <div className="user-thumb">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="comment-info">
                      <div className="user-name">Oscar Cafeo</div>
                      <div className="title">Beautiful courses</div>
                      <div className="rating">
                        <RiStarSFill className="fs-5 text-orange" />
                        <RiStarSFill className="fs-5 text-orange" />
                        <RiStarSFill className="fs-5 text-orange" />
                        <RiStarSFill className="fs-5 text-orange" />
                      </div>
                    </div>
                    <div className="text">
                      Far much that one rank beheld bluebird after outside
                      ignobly allegedly more when oh arrogantly vehement
                      tantaneously eel valiantly petted this along across
                      highhandedly much.
                    </div>
                  </div>
                  <div className="comment">
                    <div className="user-thumb">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="comment-info">
                      <div className="user-name">Oscar Cafeo</div>
                      <div className="title">Beautiful courses</div>
                      <div className="rating">
                        <RiStarSFill className="fs-5 text-orange" />
                        <RiStarSFill className="fs-5 text-orange" />
                        <RiStarSFill className="fs-5 text-orange" />
                        <RiStarSFill className="fs-5 text-orange" />
                      </div>
                    </div>
                    <div className="text">
                      Far much that one rank beheld bluebird after outside
                      ignobly allegedly more when oh arrogantly vehement
                      tantaneously eel valiantly petted this along across
                      highhandedly much.
                    </div>
                  </div>
                </div>
                <div className="resume-outer theme-blue bg-light p-4">
                  <div className="upper-title">
                    <h3>Steps for completing your project</h3>
                  </div>
                  {/* <!-- Resume BLock --> */}
                  <div className="resume-block">
                    <div className="inner">
                      <span className="name">1</span>
                      <div className="title-box">
                        <div className="info-box">
                          <h6>
                            After purchasing the project, send requirements so
                            Sabina can start the project.
                          </h6>
                          <span>
                            Delivery time starts when Sabina receives
                            requirements from you.
                          </span>
                        </div>
                        <div className="edit-box"></div>
                      </div>
                      <div className="text px-5">
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              View Requierment
                            </Accordion.Header>
                            <Accordion.Body>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1"></Accordion.Item>
                        </Accordion>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Resume BLock --> */}
                  <div className="resume-block">
                    <div className="inner">
                      <span className="name">2</span>
                      <div className="title-box">
                        <div className="info-box">
                          <h3>
                            Sabina works on your project following the steps
                            below.
                          </h3>
                          <span>
                            Revisions may occur after the delivery date.
                          </span>
                        </div>
                      </div>
                      <div className="text bg-white">
                        <ul className="p-2">
                          <li className="d-flex gap-2">
                            <div>
                              <MdFileDownloadDone className="text-success" />
                            </div>
                            <div>
                              <span>
                                <b>Step 1</b>
                              </span>
                              <p>
                                Upon purchasing the project, the client will
                                send me the project requirement. Please provide
                                your requirements in detail. We may need to
                                schedule a call to gather
                                information/clarification if needed.
                              </p>
                            </div>
                          </li>
                          <li className="d-flex gap-2">
                            <div>
                              <MdFileDownloadDone className="text-success" />
                            </div>
                            <div>
                              <span>
                                <b>Step 2</b>
                              </span>
                              <p>
                                Upon purchasing the project, the client will
                                send me the project requirement. Please provide
                                your requirements in detail. We may need to
                                schedule a call to gather
                                information/clarification if needed.
                              </p>
                            </div>
                          </li>

                          <Accordion>
                            <Accordion.Item eventKey="0" className="border-0">
                              <Accordion.Body>
                                <li className="d-flex gap-2">
                                  <div>
                                    <MdFileDownloadDone className="text-success" />
                                  </div>
                                  <div>
                                    <span>
                                      <b>Step 3</b>
                                    </span>
                                    <p>
                                      Upon purchasing the project, the client
                                      will send me the project requirement.
                                      Please provide your requirements in
                                      detail. We may need to schedule a call to
                                      gather information/clarification if
                                      needed.
                                    </p>
                                  </div>
                                </li>
                                <li className="d-flex gap-2">
                                  <div>
                                    <MdFileDownloadDone className="text-success" />
                                  </div>
                                  <div>
                                    <span>
                                      <b>Step 4</b>
                                    </span>
                                    <p>
                                      Upon purchasing the project, the client
                                      will send me the project requirement.
                                      Please provide your requirements in
                                      detail. We may need to schedule a call to
                                      gather information/clarification if
                                      needed.
                                    </p>
                                  </div>
                                </li>
                              </Accordion.Body>
                              <Accordion.Header className="shadow-none">Show more</Accordion.Header>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1"></Accordion.Item>
                          </Accordion>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Resume BLock --> */}
                  <div className="resume-block">
                    <div className="inner">
                      <span className="name">3</span>
                      <div className="title-box">
                        <div className="info-box">
                          <h3>
                            Review the work, release payment, and leave feedback
                            to Sabina.
                          </h3>
                          <span className="text-success">
                            What if I'm not happy with the work?
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-column col-lg-4 col-md-12 col-sm-12 custom-sticky">
              <aside className="sidebar">
                <div className="default-tabs style-two tabs-box position-static">
                  {/* <!--Tabs Box--> */}
                  <ul className="tab-buttons p-0 m-0  ">
                    <li
                      onClick={() => {
                        setTA(true);
                        setTB(false);
                        setTB(false);
                      }}
                      className={
                        tA
                          ? "tab-btn active-btn m-2 text-center"
                          : "tab-btn m-2 text-center"
                      }
                    >
                      Starter
                      <br />
                      $100
                    </li>
                    <li
                      onClick={() => {
                        setTB(true);
                        setTA(false);
                        setTC(false);
                      }}
                      className={
                        tB
                          ? "tab-btn active-btn m-2 text-center"
                          : "tab-btn m-2 text-center"
                      }
                    >
                      Standard <br />
                      $250
                    </li>
                    <li
                      onClick={() => {
                        setTC(true);
                        setTA(false);
                        setTB(false);
                      }}
                      className={
                        tC
                          ? "tab-btn active-btn m-2 text-center"
                          : "tab-btn m-2 text-center"
                      }
                    >
                      Advanced
                      <br />
                      $495
                    </li>
                  </ul>

                  <div className="tabs-content">
                    {/* <!--Tab--> */}
                    <div className={tA ? "tab d-block" : "d-none"} id="tab4">
                      <div className="column ">
                        <ul className="p-0 ">
                          <li className="d-flex mb-2 justify-content-between">
                            <span> Become a UI/UX </span>
                            <span className="fw-bold"> 5</span>
                          </li>
                          <li className="d-flex  mb-2 justify-content-between">
                            <span> Number of Revisions </span>
                            <span className="fw-bold"> 667</span>
                          </li>
                          <li className="d-flex  mb-2 justify-content-between">
                            <span> Number of Products </span>
                            <span className="fw-bold"> 77</span>
                          </li>
                          <li className="d-flex  mb-2 justify-content-between">
                            <span> Number of Pages </span>
                            <span className="fw-bold"> 10</span>
                          </li>

                          <li className="d-flex  mb-2 justify-content-between">
                            <span>Design Customization </span>
                            <span className="fw-bold">
                              {" "}
                              <MdFileDownloadDone />{" "}
                            </span>
                          </li>
                          <li className="d-flex  mb-2 justify-content-between">
                            <span>Content Upload</span>
                            <span className="fw-bold">
                              {" "}
                              <MdFileDownloadDone />{" "}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="d-flex justify-content-center flex-column gap-2">
                        <div className="row">
                          <span className="col-1 fs-3">
                            <MdOutlineTimer />
                          </span>

                          <p className="col m-1">
                            <b>3 days delivery</b> — January 29, 2022 Revisions
                            may occur after this date.
                          </p>
                        </div>
                        <button
                          type="button"
                          className="theme-btn btn-style-one small "
                        >
                          Contenue ($100)
                        </button>

                        <button
                          type="button"
                          className="theme-btn btn-style-three small"
                        >
                          Button Third
                        </button>
                      </div>
                    </div>

                    {/* <!--Tab--> */}
                    <div className={tB ? "tab d-block" : "d-none"} id="tab5">
                      <div className="column ">
                        <h5>What you'll learn</h5>
                        <ul className="">
                          <li>
                            <IoCheckmarkDoneCircleSharp /> You will be able to
                            start earning money Figma skills.
                          </li>
                          <li>
                            <IoCheckmarkDoneCircleSharp /> Build a UI project
                            from beginning to end.
                          </li>
                          <li>
                            <IoCheckmarkDoneCircleSharp />
                            Work with colors &amp; fonts.
                          </li>
                          <li>
                            <IoCheckmarkDoneCircleSharp />
                            You will create your own UI Kit.
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* <!--Tab--> */}
                    <div className={tC ? "tab d-block" : "d-none"} id="tab6">
                      <div className="column ">
                        <h5>What you'll learn</h5>
                        <ul className="">
                          <li>
                            <IoCheckmarkDoneCircleSharp /> Become a UI/UX
                            designer.
                          </li>

                          <li>
                            <IoCheckmarkDoneCircleSharp /> Build a UI project
                            from beginning to end.
                          </li>
                          <li>
                            <IoCheckmarkDoneCircleSharp />
                            Work with colors &amp; fonts.
                          </li>
                          <li>
                            <IoCheckmarkDoneCircleSharp />
                            You will create your own UI Kit.
                          </li>
                        </ul>
                      </div>
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
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
