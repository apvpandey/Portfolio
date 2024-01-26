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
    <footer class="footer">
      <p class="footer-title">
        Microsoft Learn Student Ambassadors of Universiti Sains Malaysia
      </p>
      <div class="footer-social">
        <a
          href="https://www.facebook.com/MicrosoftLearnStudentAmbassadors.USM"
          class="footer-icon"
        >
          <i class="fa-brands fa-facebook-square"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCU4qzNiTNdjGa60CpwtaJZg"
          class="footer-icon"
        >
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
      <p class="footer-copy">&#169; MLSA USM</p>
      <p class="footer-copy">
        This website is coded for learning purpose only.
      </p>
      <p class="footer-copy">
        Credits: Website codes and design are referred from
        <a href="https://www.youtube.com/c/Bedimcode">Bedimcode</a>
      </p>
    </footer>
  );
};

export default Footer;
