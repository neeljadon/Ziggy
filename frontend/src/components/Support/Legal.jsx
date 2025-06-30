// src/pages/Legal.jsx
import React from "react";
import "./Legal.css";

function Legal() {
  return (
    <div className="legal-page">
      <h2 className="legal-title">Legal Information</h2>

      <section className="legal-section">
        <h3>Terms & Conditions</h3>
        <p>
          By accessing or using the Ziggy platform, you agree to be bound by our Terms & Conditions. Ziggy reserves the right to update these terms at any time. Continued use implies your acceptance.
        </p>
      </section>

      <section className="legal-section">
        <h3>Refund & Cancellation</h3>
        <p>
          Orders once placed cannot be cancelled after confirmation. In case of incorrect or undelivered orders, please contact our support. Refunds will be processed as per our policy.
        </p>
      </section>

      <section className="legal-section">
        <h3>Privacy Policy</h3>
        <p>
          Your privacy is important to us. We collect and use personal data in accordance with applicable laws. Ziggy does not sell your data to third parties without consent.
        </p>
      </section>

      <section className="legal-section">
        <h3>Cookie Policy</h3>
        <p>
          Ziggy uses cookies to enhance user experience and analyze site traffic. By continuing to use our website, you consent to our use of cookies.
        </p>
      </section>
    </div>
  );
}

export default Legal;
