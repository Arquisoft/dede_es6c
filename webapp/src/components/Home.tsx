import React from "react";
import coche from '../images/coche.jpg';

export default function Home() {
    return (
        <body>
            <div>
                <h1>Welcome to Dede</h1>
                <p>Sale of used vehicles, spare parts and accessories related to the automotive industry.</p>
            </div>
            <div>
                <div>
                <h4>About Us</h4>
                <p>We are a humble company dedicated to the automotive industry. Our vision is to achieve total customer satisfaction through our services.</p>
                </div>
                <div>
                <h4>Quick Tips</h4>
                <ul>
                    <li>Check tire pressure</li>
                    <li>Check oil level</li>
                    <li>Follow the maintenance instructions in the car's manual</li>
                    <li>Wash the car regularly</li>
                    <li>Check the condition of the lights</li>
                    <li>Check the condition of the wheel nuts</li>
                </ul>
                </div>
                <div>
                <h4>Services</h4>
                <ul>
                    <li>High quality service</li>
                    <li>Vehicles checked at 120 checkpoints</li>
                    <li>No maintenance costs for 12 months or 15,000 Km</li>
                    <li>Satisfaction or refund</li>
                </ul>
                </div>
                <img src={coche} alt="logo" id="logo"/>
            </div>
        </body>
    );
}