import React from "react";
import "./ZiggyFooter.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function ZiggyFooter() {
  return (
    <footer className="ziggy-footer">
      <div className="ziggy-footer-top">
        <div className="footer-column">
          <h5>Company</h5>
          <ul>
            <li>
              <Link to="/company">About</Link>
            </li>
            <li>
              <Link to="/company">Careers</Link>
            </li>
            <li>
              <Link to="/company">Team</Link>
            </li>
            <li>
              <Link to="/company">Ziggy Blog</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Contact</h5>
          <ul>
            <li>
              <Link to={"/contact"}>Help & Support</Link>
            </li>
            <li>
              <Link to={"/contact"}>Partner with us</Link>
            </li>
            <li>
              <Link to={"/contact"}>Ride with us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Legal</h5>
          <ul>
            <li>
              <Link to="/legal">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/legal">Refund & Cancellation</Link>
            </li>
            <li>
              <Link to="/legal">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/legal">Cookie Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>We Deliver To</h5>
          <ul>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Bangalore</li>
            <li>Hyderabad</li>
            <li>Chennai</li>
          </ul>
        </div>
      </div>

      <div className="ziggy-footer-bottom">
        <p>© {new Date().getFullYear()} Ziggy Technologies Pvt. Ltd</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
}

export default ZiggyFooter;
