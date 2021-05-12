import React from "react";
// import logo from "../assets/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { GiSamusHelmet } from "react-icons/gi";
import pageLinks from "../constants/links";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <header className="nav-wrapper">
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo">
            <Link to="/">
              <GiSamusHelmet />
              KRISS
            </Link>
          </div>
          <button type="button" className="toggle-btn">
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map((link) => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
