import React from "react";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const Layout = (props) => {
  return (
    <>
      <div className="layout">
        <SideBar />
        <div className="parent-reg">{props.children}</div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
