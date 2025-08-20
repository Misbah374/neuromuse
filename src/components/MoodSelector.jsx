import React, { useState } from "react";
import TomeGenerator from "./MusicPlayer";

const MoodSelector = ( {frequency, onFrequencyChange} ) => {
    /*const [selectedMood, setSelectedMood] = useState(null);
    const moods = ["happy","sad","angry","calm","neutral"];*/
    const handleChange = (e) => {
        const newValue = e.target.value;
        if(typeof onFrequencyChange === 'function'){
            onFrequencyChange(newValue);
        }
    }

    return(
        <div>
            {/*<div className="card-container" id="mainContent">
                {moods.map((mood) => (
                    /*<div key={mood} className={`rect-card ${selectedMood === mood ? "selected" : ""}`} onClick={
                    <div key={mood} className={`rect-card`} onClick={
                        () => setSelectedMood(mood)}>
                            {mood}
                    </div>
                ))}
            </div>
            <p>Want a custom frequency sound:<br></br>*/}<p>
            <input type="number" value={frequency} onChange={handleChange} min="20" max="20000" placeholder="Enter frequency in Hz"></input>
            </p>
            {/*<hr color="#000000" width="90%"></hr><br></br>*/}
        </div>
    );
};
export default MoodSelector;
//export default freq;