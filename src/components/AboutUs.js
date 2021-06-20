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
import './css/AboutUs.css';
import Navbar from "./Navbar"
import Footer from "./Footer"

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

                <section id="navbar">
                    <Navbar />
                </section>
                
                <section id="content">
                    <div className="header">
                        <h1>Our Mission</h1>
                        <p>To Support Students in the Transition from Highschool to University</p>
                    </div>

                    <div className="about-us-desc">
                        <p>
                            We're a small group of passionate UBC students who were brought together
                            around the idea of improving student life on and off-campus. Our
                            experiences led us to the concept that is now Building Blocks.
                            <br/><br/>
                            Building Blocks is a peer mentorship app. Using our algorithm, first-year
                            students are connected upper-year students based on their program of
                            study, background, and interests. Mentees will be able to fo to their mentors
                            for questions and support. Peer mentors will receive training and guidance
                            for their role and reach out to their mentees throughout the school year. The
                            hope is that mentors and mentees can talk about their shared experiences
                            as students. The app's chat function will allow for both private messaging
                            and group discussions so students can stay connected and foster a sense
                            of community.
                        </p>
                        
                    </div>

                    <img className="about-us-img" src={background} alt="Welcome to Student Conversations Now" />
                </section>
                <Footer/>
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
