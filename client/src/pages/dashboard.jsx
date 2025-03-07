import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styling/dashboard.css'; 

const ViewBins = () => {
    const [bins, setBins] = useState([]);

    useEffect(() => {
        fetchBins();
    }, []);

    const fetchBins = async () => {
        try {
            const response = await axios.get('http://localhost:5000/db/getdb'); 
            setBins(response.data);
        } catch (error) {
            console.error('Error fetching bin data', error);
        }
    };

    const handleRemove = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/db/delete/${id}`);
            setBins(bins.filter((bin) => bin._id !== id)); 
            alert('Bin removed successfully');
        } catch (error) {
            console.error('Error deleting bin', error);
            alert('Error deleting bin');
        }
    };

    return (
        <div className="viewbins-page"> 
            <div className="viewbins-container">
                <h2>Bin Data</h2>
                {bins.length === 0 ? (
                    <p className="no-bins-message">No bins found.</p>
                ) : (
                    <div className="bin-list">
                        {bins.map((bin) => (
                            <div key={bin._id} className="bin-card">
                                <p><strong>Bin ID:</strong> {bin.binId}</p>
                                <p><strong>Location:</strong> {bin.binLocation}</p>
                                {bin.binImage && <img src={bin.binImage} alt="Bin" />}
                                <button className="remove-button" onClick={() => handleRemove(bin._id)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewBins;