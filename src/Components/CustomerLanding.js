import React from "react";
import ServiceCard from "./ServiceCard";
import CustomerLandingSideBar from "./CustomerLandingSideBar";
import CustomerHome from './CustomerHome'
import "./CustomerLanding.css";
const CustomerLanding = () => {
  return (
    <div className="customerlanding">
      <div className="customerlanding__sidebar">
        <CustomerLandingSideBar></CustomerLandingSideBar>
      </div>
        <CustomerHome>

        </CustomerHome>
      
    </div>
  );
};

export default CustomerLanding;
