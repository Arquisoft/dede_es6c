import React from "react";
import coche from '../images/coche_home.png';

export default function Home() {
    return (
        <body>
            <div>
                <h1>Welcome to DeDe</h1>
                <p className="principal">Sale of used vehicles, spare parts and accessories related to the automotive industry</p>
            </div>
            <div className="contenedor">
                <div className="columna">
                <h2>About Us</h2>
                <p>We are a humble automotive company eager to offer the best service to our customers. We believe in second chances, so our vehicles are second hand. We will take care of overhauling them ourselves, always providing the best professionals in the sector for this task.</p>
                </div>
                <div className="columna"> 
                <h2>Quick Tips</h2>
                <ul>
                    <li>Check tire pressure</li>
                    <li>Check oil level</li>
                    <li>Follow the maintenance instructions in the car's manual</li>
                    <li>Wash the car regularly</li>
                    <li>Check the condition of the lights</li>
                </ul>
                </div>
                <div className="columna">
                <h2>Services</h2>
                <ul>
                    <li>High quality service</li>
                    <li>Vehicles checked at 120 checkpoints</li>
                    <li>No maintenance costs for 12 months or 15,000 Km</li>
                    <li>Satisfaction or refund</li>
                    <li>Home delivery</li>
                </ul>
                </div>
            </div>
            <img src={coche} alt="coche" id="coche"/>
        </body>
    );
}