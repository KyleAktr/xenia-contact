import React from "react";
import LogoFooter from "../assets/img/logo_logeuse.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={LogoFooter} alt="logo xenia x logeuse" />
      </div>
      <div className="footer-content">
        <p>2023© Xenia - Logeuse.com</p>
      </div>
    </div>
  );
};

export default Footer;
