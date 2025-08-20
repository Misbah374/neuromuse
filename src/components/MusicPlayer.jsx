import React, {useState, useRef} from "react";
import MoodSelector from "./MoodSelector";

const TomeGenerator = () =>{
    const [isPlaying, setIsPlaying] = useState(false);
    const [freq, setFreq] = useState(440);
    const audioContextRef = useRef(null);
    const oscillatorRef = useRef(null);
    const handleFrequencyChange = (newFreq) => {
        setFreq(newFreq);
        if(oscillatorRef.current){
            oscillatorRef.current.frequency.value = newFreq;        // update live if playing
        }
    }

    const toggleTone = () => {
        if(!isPlaying){
            setIsPlaying(true);
            // create a new AudioContext and oscillator for each tone
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            // set the desired frequency and waveform
            oscillator.frequency.value = freq;      // 440 Hz default
            oscillator.type = 'sine'    // Pure tone


            //connect the nodes: oscillator -> gain -> speakers
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            //start the oscillator immediately
            oscillator.start();

            // save references
            audioContextRef.current = audioContext;
            oscillatorRef.current = oscillator;
        }
        else{
            // Stopping current sound
            oscillatorRef.current.stop();
            oscillatorRef.current.disconnect();
            oscillatorRef.current = null;
            audioContextRef.current.close();
            audioContextRef.current = null;    
            setIsPlaying(false);
        }
    };

    return(
        <div>
            <MoodSelector frequency={freq} onFrequencyChange={handleFrequencyChange}/>
            <button onClick={toggleTone} >    
                {isPlaying? 'Stop':`Play ${freq}`}
            </button>
            <br></br><br></br>
        </div>
    );
};
export default TomeGenerator;