import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
function Footer() {
  return (
    <footer className="py-3">
      <div className="container d-flex align-items-center flex-lg-row flex-column justify-content-between">
        <p className="mb-0">
          جميع الحقوق محفوظة لتطبيق <span>قضيتي {new Date().getFullYear()} &copy;</span>
        </p>
        <ul className="list-unstyled mb-0 mt-lg-0 mt-2 social d-flex align-items-center">
          <li className="me-3">
            <Link to="/">
            <FaFacebook />
            </Link>
          </li>
          <li className="me-3">
            <Link to="/">
            <FaLinkedinIn/>
            </Link>
          </li>
          <li>
            <Link to="/" className="me-3">
            <BiLogoGmail/>
            </Link>
          </li>
          <li>
            <Link to="/">
            <BsInstagram/>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
