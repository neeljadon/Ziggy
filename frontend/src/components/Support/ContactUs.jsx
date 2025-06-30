import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contactus-container">
      <h2 className="contactus-title">📞 Contact Us</h2>
      <p className="contactus-subtitle">
        We'd love to hear from you! Whether you need support, want to partner, or drive with us.
      </p>

      <div className="contactus-sections">

        {/* Help & Support */}
        <div className="contactus-card">
          <h3>🙋 Help & Support</h3>
          <p>
            Have questions or issues with your orders? Our customer support team is here to help you 24/7.
          </p>
          <p><strong>Email:</strong> support@ziggy.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <button className="contactus-button">Go to Help Center</button>
        </div>

        {/* Partner with Us */}
        <div className="contactus-card">
          <h3>🤝 Partner with Us</h3>
          <p>
            Want to grow your restaurant business with Ziggy? Partner with us to reach more customers.
          </p>
          <p><strong>Email:</strong> partners@ziggy.com</p>
          <p><strong>Phone:</strong> +91 91234 56789</p>
          <button className="contactus-button">Register Your Restaurant</button>
        </div>

        {/* Ride with Us */}
        <div className="contactus-card">
          <h3>🛵 Ride with Us</h3>
          <p>
            Join Ziggy as a delivery partner and earn with flexible hours, weekly payments, and more.
          </p>
          <p><strong>Email:</strong> delivery@ziggy.com</p>
          <p><strong>Phone:</strong> +91 90000 11111</p>
          <button className="contactus-button">Join as Delivery Partner</button>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;
