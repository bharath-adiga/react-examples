import "./header.css";

import React from "react";
import { Link } from "react-router-dom";
//import styles from "./header.css";

export const NavHeader = ({}) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li>
          <Link to={"productsList"} className="nav-link">
            Search Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavHeader;
