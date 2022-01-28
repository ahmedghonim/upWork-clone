import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Projects from "../Pages/Projects";
import Offers from "../Pages/Offers";
import JobDetails from "../Pages/JobDetails";
import Proposal from "../Pages/Proposal";
import SignUp from "../Pages/Register";
import NewJob from "../Pages/NewJob";
import ProjectDetails from "../Pages/ProjectDetails";
function RoutesC() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/job-details/:id" element={<JobDetails />} />
      <Route path="/proposal/:id" element={<Proposal />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      <Route path="/new-job" element={<NewJob />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default RoutesC;
