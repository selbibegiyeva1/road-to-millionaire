import './App.css';

// Components
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import JoinWishlist from './components/JoinWishlist';

// Blocks
import Hero from './blocks/Hero';
import Problem from './blocks/Problem';
import NotWorking from './blocks/NotWorking';
import Solution from './blocks/Solution';
import HowItWorks from './blocks/HowItWorks';
import YourRight from './blocks/YourRight';
import YourJourney from './blocks/YourJourney';
import { useState } from 'react';

function App() {
  const [wish, setWish] = useState(false);

  const wishList = () => setWish(!wish);

  return (
    <div className="App">
      <JoinWishlist effect={wish} click={wishList} />
      <Navbar click={wishList} />
      <Hero />
      <Slider />
      <Problem />
      <NotWorking />
      <Solution />
      <HowItWorks />
      <YourRight />
      <YourJourney click={wishList} />
      <Footer />
      <center>
        <span className='bottom-logo'>Road To Millionaire</span>
      </center>
    </div>
  )
}

export default App
