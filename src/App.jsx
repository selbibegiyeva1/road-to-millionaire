import './App.css';

// Components
import Navbar from './components/Navbar';
import Slider from './components/Slider';

// Blocks
import Hero from './blocks/Hero';
import Problem from './blocks/Problem';
import NotWorking from './blocks/NotWorking';
import Solution from './blocks/Solution';
import HowItWorks from './blocks/HowItWorks';

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
    </div>
  )
}

export default App
