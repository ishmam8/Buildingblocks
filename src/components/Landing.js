import React, { useState } from "react";
import InfoCard from "./InfoCard.js";
import SubText from "./SubText";
import choosegroup from "../images/choosegroup.png"
import talkstudents from "../images/talkstudents.png"
import laptop from "../images/laptop.png"
import check from "../images/check.png"
import mentor from "../images/mentor.png"
import plant from "../images/plant.svg"
import background from "../images/landingpagebg.png"
import { Redirect } from 'react-router-dom'
import logo from "../images/bblogo.png"
import { useSelector } from 'react-redux';

export default function Landing() {
    const [holder, setHolder] = useState(2);
    const profile = useSelector(state => state.profile);

    function logout(e){
        console.log("Test");
        localStorage.setItem("loggedIn", "false");
        this.setState(this.state);
    };

    const loggedIn = useSelector(state => state.loggedIn);
    if (!loggedIn) {
        return (
            <div className="landingbody">
                <div className="landingHeader">
                    <img className="logo"
                        src={logo}
                        alt="Welcome to Building Blocks!"
                    />
                    
                    <a className="loginSignin" href="./login">Login</a>
                    <a className="loginSignin" href="./signup">Sign Up</a>
                    <a className="loginSignin" href="./aboutus">About Us</a>
                </div>
                <div className="introGraphic">
                    <div className="slogan">
                        Connect to <br /> <br /> <br /> your campus <br /> <br />
                        <div className="slogansub">Online peer mentoring for university students</div>
                        <a href="./signup">
                            <button className="getStarted">
                                Get Started
                                </button>
                        </a>
                    </div>
                    <img className="backgroundimg" src={background} alt="Welcome to Student Conversations Now" />
                </div>
            </div>
        )
    } else {
        return (
            <Redirect to={{
                pathname: '/dashboard',
                state: profile,
            }} />
        )
        
    }
}
