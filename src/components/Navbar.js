import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/blog"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Mon blog</li>
        </NavLink>
      </ul>
    </div>
  );
};
export default Navbar;
