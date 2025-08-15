//import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import MoodSelector from './components/MoodSelector';
import TomeGenerator from './components/MusicPlayer';

function App() {
  return (
    <div className="App">
      <Header />
      <TomeGenerator/>
      <AboutUs />
    </div>
  );
}

export default App;
