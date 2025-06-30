import React from "react";
import "./Company.css";

function Company() {
  return (
    <div className="company-page">
      <h2 className="company-title">About Ziggy</h2>

      <section className="company-section">
        <h3>About</h3>
        <p>
          Ziggy is India’s fastest-growing online food delivery platform. We connect hungry customers with the best restaurants in their city, delivering delicious meals quickly and reliably.
        </p>
      </section>

      <section className="company-section">
        <h3>Careers</h3>
        <p>
          Join us to revolutionize how food is delivered! We're hiring across engineering, operations, marketing, and more. At Ziggy, you'll work in a fast-paced, impact-driven environment.
        </p>
      </section>

      <section className="company-section">
        <h3>Team</h3>
        <p>
          Our team is made up of passionate problem-solvers, food lovers, and tech enthusiasts. From delivery riders to developers, everyone at Ziggy plays a crucial role in our journey.
        </p>
      </section>

      <section className="company-section">
        <h3>Ziggy Blog</h3>
        <p>
          Stay updated with our latest product launches, food trends, and behind-the-scenes stories on the Ziggy Blog. Your go-to spot for everything Ziggy!
        </p>
      </section>
    </div>
  );
}

export default Company;
