import React from 'react';
import './Offeres.css'; // Optional, for custom styling

const offers = [
  {
    title: "Summer Special 🍦",
    description: "Buy 2 scoops, get 1 free on all fruit flavors!",
    validTill: "Valid till July 31st",
  },
  {
    title: "Combo Delight 🥤",
    description: "Get a waffle + any ice cream + cold coffee at just $6.99!",
    validTill: "Limited time offer",
  },
  {
    title: "Student Discount 🎓",
    description: "Show your student ID & get 15% off your total bill.",
    validTill: "Available every weekday",
  },
  {
    title: "Happy Hours 🎉",
    description: "20% off on all orders between 4–6 PM daily!",
    validTill: "Ongoing offer",
  },
];

const Offers = () => {
  return (
    <div className="offers-container">
      <h2 className="offers-title">Today's Sweet Deals at Ideal Ice Cream Café</h2>
      <div className="offers-list">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <span className="offer-valid">{offer.validTill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
