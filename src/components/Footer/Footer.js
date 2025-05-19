import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
       <footer className="footer">
  <div className="footer-column">
    <h2 className="footer-logo"><i className='bx bx-triangle'></i> cyber</h2>
    <p>
      Cyber is purely a fictional online store created by Web Devs for Educational purposes.
      <br /> <br />
      Team Members: <br />
       Harwinder Singh <br />
       JieLiang Xu <br />
       Jobanpreet Singh <br />
    </p>
    <div className="footer-socials">
      <i className='bx bxl-twitter'></i>
      <i className='bx bxl-facebook'></i>
      <i className='bx bxl-tiktok'></i>
      <i className='bx bxl-instagram'></i>
    </div>
  </div>

  <div className="footer-column">
    <h4>Services</h4>
    <ul>
      <li>Bonus program</li>
      <li>Gift cards</li>
      <li>Credit and payment</li>
      <li>Service contracts</li>
      <li>Non-cash account</li>
      <li>Payment</li>
    </ul>
  </div>

  <div className="footer-column">
    <h4>Assistance to the buyer</h4>
    <ul>
      <li>Find an order</li>
      <li>Terms of delivery</li>
      <li>Exchange and return of goods</li>
      <li>Guarantee</li>
      <li>Frequently asked questions</li>
      <li>Terms of use of the site</li>
    </ul>
  </div>
</footer>

    );
}

export default Footer;