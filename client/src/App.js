import logo from './logo.svg';
import Login from "./components/Login";
import Test from "./components/Test";
import Cart from "./components/cart/Cart";
import Register from "./components/Register";
import LandingPage from "./components/LandingPage";
// import Payment from './components/payment/Payment';
import React from 'react';
import './app.css';
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  useParams
} from "react-router-dom";
import Starter from './components/Starter';

import About from './components/About';
// import Payment from './components/cart/Payment';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="">
                <img src="http://bangalorefoodbank.com/images/logo.png" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="navbar-menu collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
      
                <li className="nav-item ">
                  <Link className="nav-link active" to="">
                    Home
                  </Link>
                </li>
                <div className="ms-auto">
                  <li className="nav-item ">
                    <Link className="nav-link active" to="Login">
                      Login
                    </Link>
                  </li>
                </div>
                <div className="ms-auto">
                  <li className="nav-item ">
                    <Link className="nav-link active" to="Register">
                      Register
                    </Link>
                  </li>
                </div>
                <div className="ms-auto">
                  <li className="nav-item ">
                    <Link className="nav-link active" to="about">
                      About Us
                    </Link>
                  </li>
                </div>
                <div className="ms-auto">
                  <li className="nav-item ">
                    <Link className="nav-link active" to="fooddonation">
                      Donation
                    </Link>
                  </li>
                </div>
                
              </ul>
            </div>
          </nav>
          
    
          <Routes>
            <Route path="/" element={<Starter />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/fooddonation" element={ <Cart />} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/campaigns" element={<Campaigns/>}/> */}
            {/* <Route path="/payment" element={<Payment/>} /> */}

          </Routes>
   
        </div>
      </header>
    </div>
  );
}

export default App;
