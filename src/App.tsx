import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { NasaDataProvider } from "./utils/providers/ApiProvider";

// Views
import Home from "./views/Home";
import About from "./views/About";

const App: FC = () => {
  return (
    <NasaDataProvider>
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
    </NasaDataProvider>
  );
};

export default App;
