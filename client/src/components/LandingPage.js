import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/wallpaperflare.jpg';

function LandingPage() {

    const HeaderStyle = {
        width: "100%",
        height: "100vh",
        background: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">login / register Yourself</h1>
            <p className="main-para text-center">join us now and Explore</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}


export default LandingPage;