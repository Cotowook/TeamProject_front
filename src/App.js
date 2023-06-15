import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Products from "./components/Products/Products";
import Community from "./components/Community/Community";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Home from "./components/MyHome/Home";
import Details from "./components/Products/Details";
import Details2 from "./components/Products/Details2";
import MainPage from "./components/MainPage";
import Personal from "./components/Personal/Personal";

export default function App() {
  return (
    <Router>
        <Routes>
        <Route path="/products/main/:id" element={<Details2/>}/>
        <Route path="/products/manentire/:id" element={<Details2/>}/>
          <Route exact path="/" element={<MainPage/>} />
          <Route path="/Products/*" element={<Products/>}/>
          <Route path="/Community/*" element={<Community />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Personal" element={<Personal/>} />
        
          <Route path="/Home" element={<Home />} />
        </Routes>
    </Router>
  );
}
        

