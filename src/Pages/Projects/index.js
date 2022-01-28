import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import CardList from "../../Components/CardList";

export default function Projects() {
  return (
    <div>
      {/* <Card/> */}
      {/* <CardList/> */}
      <section className="ls-section">
        <div className="auto-container">
          <div className="filters-backdrop"></div>

          <div className="row">
            {/* Filters Column*/}
            <div className="filters-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="filters-outer">
                  <button type="button" className="theme-btn close-filters">
                    X
                  </button>

                  {/* Filter Block*/}
                  <div className="filter-block">
                    <h4>Search by Keywords</h4>
                    <div className="form-group">
                      <input
                        type="text"
                        name="listing-search"
                        placeholder="Job title, keywords, or company"
                      />
                      <span className="icon flaticon-search-3"></span>
                    </div>
                  </div>

                  {/* Filter Block*/}
                

                  {/* Filter Block*/}
                  <div className="filter-block">
                    <h4>Category</h4>
                    <div className="form-group">
                      <select
                        className="chosen-select"
                        style={{ display: " none" }}
                      >
                        <option>Choose a category</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Industrial</option>
                        <option>Apartments</option>
                      </select>
                      <div
                        className="chosen-container chosen-container-single chosen-container-single-nosearch"
                        style={{ width: "100%" }}
                        title=""
                      >
                        <a className="chosen-single">
                          <span>Choose a category</span>
                          <div>
                            <b></b>
                          </div>
                        </a>
                        <div className="chosen-drop">
                          <div className="chosen-search">
                            <input type="text" autocomplete="off" readonly="" />
                          </div>
                          <ul className="chosen-results"></ul>
                        </div>
                      </div>
                      <span className="icon flaticon-briefcase"></span>
                    </div>
                  </div>

                  {/* Switchbox Outer*/}
                  <div className="switchbox-outer">
                    <h4>Job type</h4>
                    <ul className="switchbox">
                      <li>
                        <label className="switch">
                          <input type="checkbox" checked="" />
                          <span className="slider round"></span>
                          <span className="title">Freelance</span>
                        </label>
                      </li>
                      <li>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                          <span className="title">Full Time</span>
                        </label>
                      </li>
                      <li>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                          <span className="title">Internship</span>
                        </label>
                      </li>
                      <li>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                          <span className="title">Part Time</span>
                        </label>
                      </li>
                      <li>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                          <span className="title">Temporary</span>
                        </label>
                      </li>
                    </ul>
                  </div>

                  {/* Checkboxes Ouer*/}
                  <div className="checkbox-outer">
                    <h4>Date Posted</h4>
                    <ul className="checkboxes">
                      <li>
                        <input id="check-f" type="checkbox" name="check" />
                        <label for="check-f">All</label>
                      </li>
                      <li>
                        <input id="check-a" type="checkbox" name="check" />
                        <label for="check-a">Last Hour</label>
                      </li>
                      <li>
                        <input id="check-b" type="checkbox" name="check" />
                        <label for="check-b">Last 24 Hours</label>
                      </li>
                      <li>
                        <input id="check-c" type="checkbox" name="check" />
                        <label for="check-c">Last 7 Days</label>
                      </li>
                      <li>
                        <input id="check-d" type="checkbox" name="check" />
                        <label for="check-d">Last 14 Days</label>
                      </li>
                      <li>
                        <input id="check-e" type="checkbox" name="check" />
                        <label for="check-e">Last 30 Days</label>
                      </li>
                    </ul>
                  </div>

                  {/* Checkboxes Ouer*/}
                  <div className="checkbox-outer">
                    <h4>Experience Level</h4>
                    <ul className="checkboxes square">
                      <li>
                        <input id="check-ba" type="checkbox" name="check" />
                        <label for="check-ba">All</label>
                      </li>
                      <li>
                        <input id="check-bb" type="checkbox" name="check" />
                        <label for="check-bb">Internship</label>
                      </li>
                      <li>
                        <input id="check-bc" type="checkbox" name="check" />
                        <label for="check-bc">Entry level</label>
                      </li>
                      <li>
                        <input id="check-bd" type="checkbox" name="check" />
                        <label for="check-bd">Associate</label>
                      </li>
                      <li>
                        <input id="check-be" type="checkbox" name="check" />
                        <label for="check-be">Mid-Senior level4</label>
                      </li>
                      <li>
                        <button className="view-more">
                          <span className="icon flaticon-plus"></span> View More
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Filter Block*/}
                  <div className="filter-block">
                    <h4>Salary</h4>

                    <div className="range-slider-one salary-range">
                      <div className="salary-range-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                        <div
                          className="ui-slider-range ui-corner-all ui-widget-header"
                          style={{ left: "0%", width: "75%" }}
                        ></div>
                        <span
                          tabindex="0"
                          className="ui-slider-handle ui-corner-all ui-state-default"
                          style={{ left: "0%" }}
                        ></span>
                        <span
                          tabindex="0"
                          className="ui-slider-handle ui-corner-all ui-state-default"
                          style={{ left: "75%" }}
                        ></span>
                      </div>
                      <div className="input-outer">
                        <div className="amount-outer">
                          <span className="amount salary-amount">
                            $<span className="min">0</span>$
                            <span className="max">15000</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Filter Block*/}
                  <div className="filter-block">
                    <h4>Tags</h4>
                    <ul className="tags-style-{{ne">
                      <li>
                        <a href="#">app</a>
                      </li>
                      <li>
                        <a href="#">administrative</a>
                      </li>
                      <li>
                        <a href="#">android</a>
                      </li>
                      <li>
                        <a href="#">wordpress</a>
                      </li>
                      <li>
                        <a href="#">design</a>
                      </li>
                      <li>
                        <a href="#">react</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Call To Action*/}
                <div className="call-to-action-four">
                  <h5>Recruiting?</h5>
                  <p>
                    Advertise your jobs to millions of monthly users and search
                    15.8 million CVs in our database.
                  </p>
                  <a href="#" className="theme-btn btn-style-{{ne bg-blue">
                    <span className="btn-title">Start Recruiting Now</span>
                  </a>
                  <div className="image"></div>
                </div>
                {/* End Call To Action*/}
              </div>
            </div>

            {/* Content Column*/}
            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="ls-outer">
                <button
                  type="button"
                  className="theme-btn btn-style-{{wo toggle-filters"
                >
                  Show Filters
                </button>

                {/* ls Switcher*/}
                <div className="ls-switcher">
                  <div className="showing-result">
                    <div className="text">
                      Showing <strong>41-60</strong> of <strong>944</strong>{" "}
                      jobs
                    </div>
                  </div>
                  <div className="sort-by">
                    <select
                      className="chosen-select"
                      style={{ display: "none" }}
                    >
                      <option>New Jobs</option>
                      <option>Freelance</option>
                      <option>Full Time</option>
                      <option>Internship</option>
                      <option>Part Time</option>
                      <option>Temporary</option>
                    </select>
                    <div
                      className="chosen-container chosen-container-single chosen-container-single-nosearch"
                      style={{ width: "100%" }}
                      title=""
                    >
                      <a className="chosen-single">
                        <span>New Jobs</span>
                        <div>
                          <b></b>
                        </div>
                      </a>
                      <div className="chosen-drop">
                        <div className="chosen-search">
                          <input type="text" autocomplete="off" readonly="" />
                        </div>
                        <ul className="chosen-results"></ul>
                      </div>
                    </div>

                    <select
                      className="chosen-select"
                      style={{ display: "none" }}
                    >
                      <option>Show 10</option>
                      <option>Show 20</option>
                      <option>Show 30</option>
                      <option>Show 40</option>
                      <option>Show 50</option>
                      <option>Show 60</option>
                    </select>
                    <div
                      className="chosen-container chosen-container-single chosen-container-single-nosearch"
                      style={{ width: "100%" }}
                      title=""
                    >
                      <a className="chosen-single">
                        <span>Show 10</span>
                        <div>
                          <b></b>
                        </div>
                      </a>
                      <div className="chosen-drop">
                        <div className="chosen-search">
                          <input type="text" autocomplete="off" readonly="" />
                        </div>
                        <ul className="chosen-results"></ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Job Block*/}
                <CardList />

                {/* Listing Show More*/}
                <div className="ls-show-more">
                  <p>Showing 36 of 497 Jobs</p>
                  <div className="bar">
                    <span className="bar-inner" style={{ width: "40%" }}></span>
                  </div>
                  <button className="show-more">Show More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
