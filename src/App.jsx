import { Routes, Route } from "react-router";

import './App.css';

// Routes
import Faq from './routes/Faq';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  )
}

export default App
