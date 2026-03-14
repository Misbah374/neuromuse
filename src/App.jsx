//import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import TomeGenerator from './components/FrequencySound';

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
