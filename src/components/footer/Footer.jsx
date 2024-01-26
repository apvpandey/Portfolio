import React from "react";
import { Link } from "react-router-dom";
// import playStore from './../../assets/images/play-store.png';
// import appStore from './../../assets/images/app-store.png';
// import bitcoin from './../../assets/images/bitcoin.svg';
// import litecoin from './../../assets/images/litecoin.svg';
// import monerocoin from './../../assets/images/monero.svg';
// import americanExpress from './../../assets/images/american-express.svg';
// import paypal from './../../assets/images/paypal.svg';
// import citi from './../../assets/images/citi.svg';
// import bitcoinCard from './../../assets/images/bitcoin-card.svg';
// import envelopeIcon from './../../assets/icons/envelope-icon.svg';
// import linkedinIcon from './../../assets/icons/linkedin.svg';
// import twitterIcon from './../../assets/icons/twitter.svg';
// import facebook from './../../assets/icons/facebook.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-3 gy-5 gy-sm-3 py-5 body text-center">
          <div className="col-xs-12 col-md-4 col-lg-3 text-center"></div>
          <div className="col-xs-12 col-md-4 col-lg-3 text-center"></div>
          <div className="col-xs-12 col-md-4 col-lg-3 ">
            <h6 className="h6 title">About company</h6>
            <ul class="footer-nav-links">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">PRICING</a>
              </li>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">SERVICES</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-3 text-center"></div>
          <div className="col-xs-12 col-md-4 col-lg-3 text-center"></div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <div class="copy-right-text">
            <p>
              Copyright © 2024 . Designed By <a href="">Apoorv</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
