
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header/header";
import Home from "./components/Home/home";
// import Nav from "./components/Nav/nav";

function App() {
  return (
   <>
    <Router>
      <Header />
      {/* <Nav/>  */}
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </Router>
   </>
  );
}

export default App;
