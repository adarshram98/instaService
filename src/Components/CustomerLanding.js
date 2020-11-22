import React from "react";
import ServiceCard from "./ServiceCard";
import CustomerLandingSideBar from "./CustomerLandingSideBar";
import "./CustomerLanding.css";
const CustomerLanding = () => {
  return (
    <div className="customerlanding">
      <div className="customerlanding__sidebar">
        <CustomerLandingSideBar></CustomerLandingSideBar>
      </div>

      <div className="customerlanding__section">
        {/* Side Bar */}

        {/* Body */}
        <ServiceCard></ServiceCard>
      </div>
    </div>
  );
};

export default CustomerLanding;
