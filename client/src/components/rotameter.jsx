import React, { useState } from "react";
import "../styling/rotameter.css";

const Gauge = ({value}) => {
   
     const speed = value;
   

    
    const getColor = () => ["darkgreen", "lightgreen", "yellow", "red"][
        Math.min(Math.floor(speed / 25), 3)
    ];

    
    const radius = 40;
    const circumference = Math.PI * radius; 
    const strokeDashoffset = circumference * (1 - speed / 100);

    return (
        <div className="gauge-container">
            
            <div className="gauge">
                <svg viewBox="0 0 100 60" className="gauge-svg">
                    
                    <path
                        d="M 10 50 A 40 40 0 0 1 90 50"
                        className="background-arc"
                    />
                   
                    <path
                        d="M 10 50 A 40 40 0 0 1 90 50"
                        className="colored-arc"
                        stroke={getColor()}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                    />
                </svg>

               
            </div>

            
        </div>
    );
};

export default Gauge;
