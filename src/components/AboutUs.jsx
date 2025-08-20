import React from "react";
import myImage from "../assets/moodplot.jpg";

const AboutUs = () => {
    return(
        <div className="about" style={{marginBottom:'20px'}}>
            <h2>About Neuromuse</h2>
            <p>
                This project is a technical implementation based on the research paper <a href="https://www.mdpi.com/2624-599X/4/2/28">"A Preliminary 
                Investigation on Frequency Dependent Cues for Human Emotions"</a> authored by Manish Kumar, Thushara D. Abhayapala, and Prasanga Samarasinghe.
            </p>
            <p>
                The project visually demonstrates the relationships between pure tone frequencies and perceived human emotions, using data findings from 
                the paper. It is intended for educational purposes only and does not claim to be a definitive or scientifically validated tool for emotion 
                recognition.
            </p>
            <img src={myImage} style={{width:'100%'}}></img>
            <p>
                Above image is only for educational purpose. All rigths are reserved by the authors of research paper (links of the actual paper is given above).
            </p>
        </div>
    );
};
export default AboutUs;