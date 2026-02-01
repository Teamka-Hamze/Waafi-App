import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Description */}
        <div className="footer-box">
          <p>
            WAAFI is your new lifestyle combining mobile money,
            communication, entertainment, and productivity in a unified app.
          </p>
        </div>

        {/* Our Products */}
        <div className="footer-box">
          <h4>Our Products</h4>
          <ul>
            <li>Money</li>
            <li>Communication</li>
            <li>Entertainment</li>
            <li>Booking/Reservation</li>
            <li>Online Shopping</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-box">
          <h4>Company</h4>
          <ul>
            <li>Home</li>
            <li>Our Products</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Our Partners</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-box">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Waafi SAS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
