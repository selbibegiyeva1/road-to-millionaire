import { Routes, Route } from "react-router";

import './App.css';

// Routes
import Faq from './routes/Faq';
import Home from './routes/Home';

// Components
import ScrollToTop from "./components/ScrollToTop";

function App() {
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
