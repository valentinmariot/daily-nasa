import { FC } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { NasaDataProvider } from "@/utils/providers/ApiProvider";
import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

// Views
import Home from "./views/Home";
import About from "./views/About";

const App: FC = () => {
  return (
    <NasaDataProvider>
      <Header />
      <div className="container">
        <Router>
          <Navbar>
            <Link to="/">/ H O M E</Link>
            <Link to="/about">/ A B O U T</Link>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </NasaDataProvider>
  );
};

export default App;
