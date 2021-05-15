import React from "react";
// import logo from "../assets/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { GiSamusHelmet } from "react-icons/gi";
import pageLinks from "../constants/links";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__wrapper__center">
          <h1>
            <Link to="/">kriss</Link>
          </h1>
          <button type="button">
            <FaAlignRight />
          </button>
        </div>
        <div className="header__wrapper__links">
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
