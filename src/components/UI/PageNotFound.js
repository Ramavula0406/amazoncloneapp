import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Page Not Found.....</h1>
      <NavLink to="/">
        <button style={{ color: "hotpink" }}>Home</button>
      </NavLink>
    </div>
  );
};

export default PageNotFound;
