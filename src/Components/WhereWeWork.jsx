import React from 'react';
import Globe3D from './Globe3D';
import './WhereWeWork.css';

export default function WhereWeWork() {
  return (
    <div className="where-we-work-wrapper">
      <section className="where-we-work">
        <div className="where-head">
          <h2>Where We Work</h2>
          <p>Our global reach with a focus on Virginia, USA.</p>
        </div>
        
        <div className="globe-container">
          <Globe3D />
        </div>
        
        <div className="location-info">
          <h3>Virginia, USA</h3>
          <p>Our primary focus region where we're making a direct impact on healthcare accessibility.</p>
        </div>
      </section>
    </div>
  );
}