import { Routes, Route } from "react-router";
import { useEffect } from "react";

import './App.css';

// Routes
import Faq from './routes/Faq';
import Home from './routes/Home';

// Components
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      console.log(`Scrolled: ${window.scrollY}px`);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  )
}

export default App
