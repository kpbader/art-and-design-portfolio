
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Portfolio from "./components/Portfolio/portfolio";
import Ludicrous from "./components/Ludicrous/ludicrous";
import PaintMix from "./components/Paint-Mix/paint-mix";
import Contact from "./components/Contact/contact";

function App() {
  return (
   <>
    <Router>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Ludicrous" element={<Ludicrous />} />
        <Route path="/Paintingandmixedmedia" element={<PaintMix />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
