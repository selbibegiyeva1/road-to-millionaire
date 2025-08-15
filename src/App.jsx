import './App.css';

// Components
import Navbar from './components/Navbar';
import Slider from './components/Slider';

// Blocks
import Hero from './blocks/Hero';
import Problem from './blocks/Problem';
import NotWorking from './blocks/NotWorking';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Slider />
      <Problem />
      <NotWorking />
    </div>
  )
}

export default App
