import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <Link
          to="/"
          className="d-flex flex-row justify-content-center align-items-center text-decoration-none"
        >
          <img alt="Logo" src={logo} height="40" />
          &ensp;
          <div className="navbar-brand">Vehicle State Tax</div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
