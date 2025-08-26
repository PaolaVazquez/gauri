import React from "react";
import LogoNegro from "../assets/images/logo-png.png";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-menu">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={LogoNegro} alt="Logo Negro Gauri" className="Logo-menu" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                SERVICIOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SOBRE NOSOTROS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">CONTACTO</a>
            </li>
            <li>
              <a href="" className="btn btn-primary btn-reservation">
                RESERVA UNA REUNIÓN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
