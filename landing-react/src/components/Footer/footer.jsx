// import { useState } from 'react'
import instagramLogo from "../../assets/icon-instagram.svg";
import twitterLogo from "../../assets/icon-twitter.svg";
import facebookLogo from "../../assets/icon-facebook.svg";
import pinterestLogo from "../../assets/icon-pinterest.svg";
import logoPrincipal from "../../assets/logo.svg";
import "./footer.scss";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="logo-loopstudios">
            <img
              src={logoPrincipal}
              className="logo-principal"
              alt="logo principal"
            />
          </div>
          <div className="icons-footer">
            <a href="/" target="">
              <img src={instagramLogo} className="logo logo-iconos" alt="Instagram logo" />
            </a>
            <a href="/" target="">
              <img src={twitterLogo} className="logo logo-iconos" alt="Twitter logo" />
            </a>
            <a href="/" target="">
              <img src={facebookLogo} className="logo logo-iconos" alt="Facebook logo" />
            </a>
            <a href="/" target="">
              <img src={pinterestLogo} className="logo logo-iconos" alt="Pinterest logo" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-list">
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Product</li>
              <li>Support</li>
            </ul>
          </div>

          <div className="all-right-reserved">
            <p className="read-the-docs">
              2021 Loopstudios. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
