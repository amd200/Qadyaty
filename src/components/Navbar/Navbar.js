import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Buttons from "../Buttons/Buttons";
function Navbar() {
  const location = useLocation();
  const handleScroll = (idSection) => {
    return () => {
      let section = document.getElementById(idSection);
      if (section) {
        window.scrollTo(0, section.offsetTop);
      }
    };
  };

  const [clicked, setClick] = useState(false);
  function activeMenu() {
    setClick(!clicked);
  }

  return (
    <nav>
      <div className="container  d-flex align-items-center justify-content-between ">
        <Link to="/" className="logo">
          <img src="imgs/logo.png" alt="logo" height={85} />
        </Link>
        <div
          className={`right d-flex align-items-center justify-content-between w-100 ${
            clicked ? "active" : ""
          }`}
        >
          <ul className="navbar-nav flex-row">
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                to="/notes"
                className={location.pathname === "/notes" ? "active" : ""}
                onClick={handleScroll("notes")}
              >
                عن التطبيق
              </Link>
            </li>
            <li>
              <Link
                to="/supporters"
                className={location.pathname === "/supporters" ? "active" : ""}
                onClick={handleScroll("supporters")}
              >
                الداعمين
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className={location.pathname === "/team" ? "active" : ""}
                onClick={handleScroll("team")}
              >
                المتطوعين
              </Link>
            </li>
          </ul>
          <Buttons
            link="https://play.google.com/store/apps/details?id=hasnaa.ms_tree.qadyaty"
            title="حمل التطبيق"
            green
          />
        </div>
        <div
          className={`hamburger hamburger--slider d-md-none d-inline-block js-hamburger ${
            clicked ? "is-active" : ""
          }`}
          onClick={activeMenu}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
