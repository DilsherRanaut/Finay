import React from "react";
import logo from "../assets/images/finay-logo.gif"

export default function Footer() {
  return (
    <section className="Footer section">
      <div className="Footer-outer outer-section">
        <div className="container">
          <div className="Footer-inner inner-section">
            <div className="Footer-inner-left">
              <div className="Footer-copiright">
                <p>Copyright © 2025  All rights reserved. </p>
              </div>
            </div>
            <div className="Footer-inner-center">
              <div className="Footer-logo align-center">
                <img src={logo} alt="Finay Logo" />
              </div>
            </div>
            <div className="Footer-inner-right">
              {/* <div className="Footer-social-icons">
              <div className="Footer-facebook footer-icon">F</div>
              <div className="Footer-twitter footer-icon">X</div>
              <div className="Footer-instagram footer-icon">I</div>
              <div className="Footer-linkdin footer-icon">L</div>
              
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
