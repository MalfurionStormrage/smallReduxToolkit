import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const handleNavbar = () => {
    document.getElementById("navbarText").classList.remove("show");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fw-bolder">
      <div className="container">
        <a className="navbar-brand">List</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                activeClassName="text-red"
                className="nav-link"
                to="/"
                onClick={() => handleNavbar()}
              >
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/add"
                onClick={() => handleNavbar()}
              >
                Agregar
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
