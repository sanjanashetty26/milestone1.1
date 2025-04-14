// menucard.js

import React from 'react';
import './index.html'; // Optional CSS file for styling

const iceCreamMenu = [
  {
    id: 1,
    name: "Classic Vanilla",
    description: "Rich and creamy vanilla ice cream made from Madagascar beans.",
    price: "$3.50",
    image: "/images/vanilla.jpg"
  },
  {
    id: 2,
    name: "Choco Fudge Delight",
    description: "Chocolate ice cream swirled with fudge and brownie chunks.",
    price: "$4.00",
    image: "/images/choco-fudge.jpg"
  },
  {
    id: 3,
    name: "Strawberry Swirl",
    description: "Fresh strawberry puree blended into creamy ice cream.",
    price: "$3.75",
    image: "/images/strawberry.jpg"
  },
  {
    id: 4,
    name: "Mango Tango",
    description: "Seasonal mango flavor with a tropical twist.",
    price: "$4.25",
    image: "/images/mango.jpg"
  },
  {
    id: 5,
    name: "Mint Choco Chip",
    description: "Cool mint ice cream with chocolate chips.",
    price: "$4.00",
    image: "/images/mint-choco.jpg"
  }
];

const MenuCard = () => {
  return (
    <div className="menu-container">
      <h2>🍦 Ideal Ice Cream Menu</h2>
      <div className="menu-grid">
        {iceCreamMenu.map(item => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} className="ice-cream-img" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
