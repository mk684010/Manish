import React, {Fragment} from "react"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <Fragment>
      <Router>
        <div className="app">
          <Routes>
            {/* <Route path="/checkout" element={<h1>Checkout</h1>} /> */}
            <Route path="/checkout" element={
              <Fragment>
                <Header />
                <Checkout />             
              </Fragment>
            } />
            <Route path="/login" element={<Login />} />
            {/* This is the Default route, */}
            <Route path="/" element={
              <Fragment>
                <Header />
                <Home />
              </Fragment>
            } />
          </Routes>          
        </div>
      </Router>
    </Fragment>    
  );
}

export default App;
