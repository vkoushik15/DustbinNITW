



import React from "react";
import Gauge from "./rotameter";
import "../styling/dustbin.css";

const Dustbin = ({ no, gfilled, godor, bfilled }) => {
  const validGfilled = isNaN(gfilled) ? 0 : Number(gfilled);
  const validGodor = isNaN(godor) ? 0 : Number(godor);
  const validBfilled = isNaN(bfilled) ? 0 : Number(bfilled);

  return (
    <div className="dustbin-container">
      <div className="dustbin-number">
        <h1>Dustbin No {no}</h1>
      </div>
      <div className="sections-container">
        <div className="section green">
          <h2>Filled</h2>
          <Gauge value={validGfilled} />
          <p style={{fontWeight:900,fontSize:'1.5rem'}}>{validGfilled} %</p> 
          
          <h2>Odor</h2>
          <Gauge value={validGodor} />
          <p style={{fontWeight:900,fontSize:'1.5rem'}}>{validGodor} ppm</p>  
        </div>
        <div className="section blue">
          <h2>Filled</h2>
          <Gauge value={validBfilled} />
          <p style={{fontWeight:900,fontSize:'1.5rem'}}>{validBfilled} %</p>  
        </div>
      </div>
    </div>
  );
};


export default Dustbin;