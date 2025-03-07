

import React, { useState, useRef } from "react";
import axios from "axios";
import "../styling/upload.css";
import { useNavigate } from "react-router-dom";
const Upload = () => {
    const navigate = useNavigate();
    const [binId, setBinId] = useState("");
    const [binLocation, setBinLocation] = useState("");
    const [binImage, setBinImage] = useState(null);
    const [usingCamera, setUsingCamera] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    // Convert image file to Base64
    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    // Start Camera
    const startCamera = async () => {
        setUsingCamera(true);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error("Error accessing camera", error);
            alert("Error accessing camera");
        }
    };

    // Capture Image from Video Stream
    const captureImage = () => {
        if (videoRef.current && canvasRef.current) {
            const context = canvasRef.current.getContext("2d");
            context.drawImage(videoRef.current, 0, 0, 300, 200);
            const imageDataUrl = canvasRef.current.toDataURL("image/png"); // Convert to Base64
            setBinImage(imageDataUrl);
            stopCamera();
        }
    };

    // Stop Camera
    const stopCamera = () => {
        setUsingCamera(false);
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!binImage) {
            alert("Please capture or upload an image");
            return;
        }

        try {
            const formData = {
                binId,
                binLocation,
                binImage, 
            };

            await axios.post("http://localhost:5000/db/postdb", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            alert("Data submitted successfully");

            // Reset form

            setBinId("");
            setBinLocation("");
            setBinImage(null);
            navigate("/");

        } catch (error) {
            console.error("Error submitting data", error);
            alert("Error submitting data");
        }
    };

    return (
        <div className="upload-page"> 
            <div className="upload-container">
                <h2>Upload Bin Data</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Bin ID:</label>
                        <input type="text" value={binId} onChange={(e) => setBinId(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Bin Location:</label>
                        <input type="text" value={binLocation} onChange={(e) => setBinLocation(e.target.value)} required />
                    </div>
                    <div className="form-group image-section">
                        <label>Bin Image:</label>
                        {binImage ? (
                            <img src={binImage} alt="Captured" />
                        ) : usingCamera ? (
                            <div>
                                <video ref={videoRef} autoPlay className="video-preview"></video>
                                <div className="camera-buttons">
                                    <button type="button" onClick={captureImage}>Capture</button>
                                    <button type="button" onClick={stopCamera}>Cancel</button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <input type="file" onChange={(e) => toBase64(e.target.files[0]).then(setBinImage)} />
                                <button type="button" onClick={startCamera}>Use Camera</button>
                            </div>
                        )}
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>

            <canvas ref={canvasRef} style={{ display: "none" }} width="300" height="200"></canvas>
        </div>
    );
};

export default Upload;