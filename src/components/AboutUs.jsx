import React from "react";
import myImage from "../assets/moodplot.jpg";

const AboutUs = () => {
    return(
        <div className="about" style={{marginBottom:'20px'}}>
            <h2>About Neuromuse</h2>
            <p>
                Neuromuse is a web application built with React.js that leverages the Web Audio API to generate customizable sound
                frequencies in real time. The project features a clean, component-based architecture with interactive controls for selecting
                and adjusting tones, along with support for simultaneous playback of ambient sounds.
            </p>
        </div>
    );
};
export default AboutUs;