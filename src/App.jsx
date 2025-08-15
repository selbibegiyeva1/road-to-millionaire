import './App.css';

// Components
import Navbar from './components/Navbar';
import Slider from './components/Slider';

// Blocks
import Hero from './blocks/Hero';
import Problem from './blocks/Problem';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Slider />
      <Problem />
    </div>
  )
}

export default App
