import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";
import { FaArrowCircleDown } from "react-icons/fa";

function Buttons(props) {
  const Icon = props.icon || FaArrowCircleDown;
  return (
    <Link
      target="_blank"
      to={props.link}
      className={`btn btn-bg  ${props.green ? "green" : "black"} ${
        props.className
      }`}
    >
      {Icon && <Icon className="me-2" />}
      {props.title}
    </Link>
  );
}

export default Buttons;
