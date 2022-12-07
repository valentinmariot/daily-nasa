import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { NasaDataProvider } from "./utils/providers/ApiProvider";
import Navbar from "./components/Navbar";

// Views
import Home from "./views/Home";
import About from "./views/About";

const App: FC = () => {
  return (
    <NasaDataProvider>
      <div className="container">
        <Router>
          <Navbar>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </Navbar>
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
