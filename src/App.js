
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
import Print from "./components/Print/print";
import Motion from "./components/Motion/motion";
import Misc from "./components/Misc/misc";
import Photo from "./components/Photo/photo";
import Contact from "./components/Contact/contact";

function App() {
  return (
   <>
    <Router>
      <Header />
      <Routes> 
        <Route path="/art-and-design-portfolio" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Ludicrous" element={<Ludicrous />} />
        <Route path="/Printandcollage" element={<Print />} />
        <Route path="/Paintingandmixedmedia" element={<PaintMix />} />
        <Route path="/Motion" element={<Motion />} />
        <Route path="/Miscdesign" element={<Misc />} />
        <Route path="/Photo" element={<Photo />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
