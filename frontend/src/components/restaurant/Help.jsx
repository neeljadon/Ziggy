import React, { useState } from "react";
import "./Help.css";

const faqs = [
  {
    question: "How do I cancel my order?",
    answer:
      "Go to 'My Orders' > select the order > click 'Cancel Order'. Note: Orders can only be cancelled before preparation starts.",
  },
  {
    question: "What if I receive the wrong or cold food?",
    answer:
      "Go to 'Help' > select the order > report an issue. Our support team will assist you immediately.",
  },
  {
    question: "How do I apply a coupon code?",
    answer:
      "On the checkout screen, enter the valid coupon code in the 'Apply Coupon' section before payment.",
  },
  {
    question: "What are Ziggy Coins?",
    answer:
      "Ziggy Coins are reward points earned on each order. You can use them for discounts on future orders.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "Click on the 'Chat with Support' button below or email us at support@ziggy.com.",
  },
];

function Help() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="help-container">
      <h2 className="help-title">🙋 Help & Support</h2>
      <p className="help-subtitle">We're here to help you with your queries.</p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className="support-footer">
        <p>Still need help?</p>
        <button className="support-button">Chat with Support</button>
      </div>
    </div>
  );
}

export default Help;
