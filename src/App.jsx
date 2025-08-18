import './App.css';

// Components
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';

// Blocks
import Hero from './blocks/Hero';
import Problem from './blocks/Problem';
import NotWorking from './blocks/NotWorking';
import Solution from './blocks/Solution';
import HowItWorks from './blocks/HowItWorks';
import YourRight from './blocks/YourRight';
import YourJourney from './blocks/YourJourney';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Slider />
      <Problem />
      <NotWorking />
      <Solution />
      <HowItWorks />
      <YourRight />
      <YourJourney />
      <Footer />
      <center>
        <span className='bottom-logo'>Road To Millionaire</span>
      </center>
    </div>
  )
}

export default App
