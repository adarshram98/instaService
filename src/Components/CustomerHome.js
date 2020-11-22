import React from 'react'
import ServiceCard from './ServiceCard'
import './CustomerHome.css'
const CustomerHome = () => {
    return (
        <div className="customerhome">
        <div className="customerhome__section">
        
        {/* Section Header */}
        {/* Section */}
        
        <ServiceCard className="customerhome__card"></ServiceCard>
        <ServiceCard className="customerhome__card"></ServiceCard>
        <ServiceCard className="customerhome__card"></ServiceCard>
      </div>
        </div>
    )
}

export default CustomerHome
