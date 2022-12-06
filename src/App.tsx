import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Views
import Home from "./views/Home";
import About from "./views/About";

const App: FC = () => {
  
// const NasaKey = import.meta.env.VITE_NASA_KEY;
// console.log('NasaKey', NasaKey);

  return (
    <div className="container">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
