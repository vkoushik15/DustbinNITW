

import React, { useEffect, useState } from 'react';
import { database } from "../components/firebase";
import { ref, onValue, off } from "firebase/database";
import Dustbin from '../components/dustbin';
import { FaExclamationTriangle } from 'react-icons/fa';
import '../styling/m.css';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const [dustbinData, setDustbinData] = useState([]);

  useEffect(() => {
    const dbref = ref(database, '/');
    const fetchData = () => {
      onValue(dbref, (snapshot) => {
        const data = snapshot.val();
        setDustbinData(data);
        
      });
    };

    fetchData();

    
    return () => {
      off(dbref);
    };
  }, []);

  const handleClick = () => {
    navigate('/upload');
  };


  const dustbinDataManual = [
    { no: 1, gfilled: dustbinData.dustbin_1?.fillLevel1, godor: dustbinData.dustbin_1?.odor, bfilled: dustbinData.dustbin_1?.fillLevel2 },
    { no: 2, gfilled: dustbinData.dustbin_2?.fillLevel1, godor: dustbinData.dustbin_2?.odor, bfilled: dustbinData.dustbin_2?.fillLevel2 },
    { no: 3, gfilled: dustbinData.dustbin_3?.fillLevel1, godor: dustbinData.dustbin_3?.odor, bfilled: dustbinData.dustbin_3?.fillLevel2 },
    { no: 4, gfilled: dustbinData.dustbin_4?.fillLevel1, godor: dustbinData.dustbin_4?.odor, bfilled: dustbinData.dustbin_4?.fillLevel2 },
    { no: 5, gfilled: dustbinData.dustbin_5?.fillLevel1, godor: dustbinData.dustbin_5?.odor, bfilled: dustbinData.dustbin_5?.fillLevel2 },
  ];

  return (
    <div className="main-container">
      <div className="dustbin-grid">
        {dustbinDataManual.map((data) => (
          <Dustbin
            key={data.no}
            no={data.no}
            gfilled={data.gfilled}
            godor={data.godor}
            bfilled={data.bfilled}
          />
        ))}
      </div>
      <button className="damaged-button" onClick={handleClick}>
        <FaExclamationTriangle style={{ marginRight: '8px' }} />
        Damaged
      </button>
    </div>
  );
};

export default Main;
