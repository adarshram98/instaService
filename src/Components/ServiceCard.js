import React from "react";
import "./ServiceCard.css";

const ServiceCard = () => {
  return (
    <div className="servicecard">
      {/* img  */}
      <img
        src="https://images.unsplash.com/photo-1602526430780-782d6b1783fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      {/* Card info */}
      <div className="servicecard__info">
        <h3>Title</h3>
        <h4>Name</h4>
        <h5>Price</h5>
      </div>
    </div>
  );
};

export default ServiceCard;
