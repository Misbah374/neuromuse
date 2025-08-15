import React from "react";

const AboutUs = () => {
    return(
        <div className="about" style={{marginBottom:'20px'}}>
            <h2>About Neuromuse</h2>
            <p>
                This website is inspired by a research paper "A Preliminary Investigation on Frequency Dependent Cues for Human Emotions". The developer tries
                to implement the conclusions of the paper in the website so that people can use the research in thier daily life.
            </p>
            <p>
                This website may be used by writers who have to write a particular emotion or genre. Graphic designer can also use this to do thier work based 
                on required theme.
            </p>
            <p>
                Neuromuse helps in setting the mood, but if overused, the user may not relying on their natural emotions. It can reduce emotional authenticity
                and lead the user to avoid their real feelings, which can be harmful to long term creativity.
            </p>
        </div>
    );
};
export default AboutUs;