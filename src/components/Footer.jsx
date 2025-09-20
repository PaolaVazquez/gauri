import React from "react";
import LogoNegro from "../assets/images/logo-png.png";
export const Footer = () => {
  return (
    <footer className="bg-footer py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>
          <div className="col-12 col-sm-12 col-md-10 col-lg-10 mb-4">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-2">
                <div className="text-center">
                  <div className="menu-footer">
                    <a href="">
                      <h6>Inicio</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-2">
                <div className="text-center">
                  <div className="menu-footer">
                    <a href="">
                      <h6>Nuestros Servicios</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-2">
                <div className="text-center">
                  <div className="menu-footer">
                    <a href="">
                      <h6>Nosotros</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-2">
                <div className="text-center">
                  <div className="menu-footer">
                    <a href="">
                      <h6>Contacto</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>
          <hr />
          <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="text-center social-media-footer">
              <a href="">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="pt-4 text-center">
              <p>
                © {new Date().getFullYear()}{" "}
                <span className="title-footer">Gauri</span>
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
        </div>
      </div>
    </footer>
  );
};
