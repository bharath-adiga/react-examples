import "./footer.css";

import React from "react";
import { Link } from "react-router-dom";
export const NavFooter = ({}) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li>
          <Link to={"/products"} className="nav-link">
            Search Products{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavFooter;
