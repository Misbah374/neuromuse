import react, {useState} from "react";
import MoodSelector from "./MoodSelector";

const TomeGenerator = () =>{
    const [isPlaying, setIsPlaying] = useState(false);
    const [freq, setFreq] = useState(440);
    const handleFrequencyChange = (newFreq) => {
        setFreq(newFreq);
    }

    const toggleTone = () => {
        if(isPlaying){
            console.log("Tone is playing currently...");
            return;
        }
        setIsPlaying(true);
        // create a new AudioContext and oscillator for each tone
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        // set the desired frequency and waveform
        oscillator.frequency.value = freq;      // 440 Hz default
        oscillator.type = 'sine'    // Pure tone

        //set a gain value to control the volume
        gainNode.gain.value = 1;

        //connect the nodes: oscillator -> gain -> speakers
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        //start the oscillator immediately
        oscillator.start();

        // stop the oscillator after a set duration like 10 seconds
        const stopTime = audioContext.currentTime + 10;
        oscillator.stop(stopTime);

        //After the given duration, set the state back to not playing
        setTimeout(() => {
            setIsPlaying(false);
            audioContext.close();
        }, 10000);
    };

    return(
        <div>
            <MoodSelector frequency={freq} onFrequencyChange={handleFrequencyChange}/>
            <button onClick={toggleTone} >    {/*disabled={isPlaying}*/}
                {isPlaying? 'Playing...':`Play ${freq}`}
            </button>
            <br></br><br></br>
        </div>
    );
};
export default TomeGenerator;