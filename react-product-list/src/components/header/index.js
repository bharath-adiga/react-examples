import "./header.css";

import React from "react";
import { Link } from "react-router-dom";
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
