import React, { Fragment, useState } from "react";
import SideBar from "../nav/SideBar";

const Nav = ({ title, onClick: ClickToAddEvent, onClick2, onClick3 }) => {
  const [toggle, setToggle] = useState("");
  const onClick = (name) => setToggle(toggle === name ? "" : name);
  return (
    <Fragment>
      <SideBar />
    </Fragment>
  );
};

export default Nav;
