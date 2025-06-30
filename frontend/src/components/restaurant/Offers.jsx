import React from "react";
import "./Offers.css";

const offersList = [
  {
    id: 1,
    title: "50% OFF on First Order",
    code: "ZIGGY50",
    description: "Flat 50% off up to ₹100 on your first order",
    validTill: "June 30, 2025",
  },
  {
    id: 2,
    title: "30% OFF on Orders Above ₹149",
    code: "SAVE30",
    description: "Valid on select restaurants only",
    validTill: "July 15, 2025",
  },
  {
    id: 3,
    title: "Free Delivery on Weekends",
    code: "FREEDROP",
    description: "No delivery charges every Saturday & Sunday",
    validTill: "Ongoing",
  },
  {
    id: 4,
    title: "20% Cashback with ZiggyPay",
    code: "CASHBACK20",
    description: "Pay using ZiggyPay wallet and get cashback",
    validTill: "July 5, 2025",
  },
];

function Offers() {
  return (
    <div className="offers-container">
      <h2 className="offers-title">🔥 Best Offers For You</h2>
      <div className="offers-grid">
        {offersList.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <h5 className="offer-title">{offer.title}</h5>
            <p className="offer-description">{offer.description}</p>
            <p className="offer-code">
              Use Code: <span>{offer.code}</span>
            </p>
            <p className="offer-validity">Valid Till: {offer.validTill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
