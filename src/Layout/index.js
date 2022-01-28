import React from "react";
import {  Container, Row, Stack } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import Chat from '../Components/Chat'
function Layout({children}) {
  return (
    <Stack className="main-layout">
      <NavBar />
        <div >
          {children}
        </div>
        {/* <Chat/> */}
    </Stack>
  );
}

export default Layout;
