import React from "react";
import './css/Signup.css';
import background from "../images/mentor.png"
import GoogleButton from "./GoogleButton.js"
import FacebookButton from "./FacebookButton.js"
import Navbar from "./Navbar.js"
import GoogleLogin from 'react-google-login'



const Signup = props => (
    <div className="signUp">
        
        <div className="rectangleSignUp">
            <a href="/" className="App-name-login">
                ⬅ STUDENT CONVERSATIONS NOW
            </a>
            <div className="niceToMeetYou">
                Welcome to<br></br>Building Blocks
            </div>

            <img className="signupPicture" src={background}/>
        </div>
        <div className="rectangleRightSignUp">
            
            <div className = "rectangle_2SignUp">  
                
                < GoogleButton />
            </div>
            
            <div className = "facebookCircle_512"/>           
            <div className = "signUpWithFacebook"><FacebookButton /></div>
            <div className = "or"> or </div>
                   
            
            <div className = "rectangle_2_2SignUp "/>   

            <div className="alreadyHaveAnAccount">
                Already have an account? <a href="./login"><span className="sign-in-button">Log In</span></a>
            </div> 
        </div>

        <a href = "/signupWithEmail"><div className = "signUpWithEmail">Sign up with e-mail</div></a>
            <div className = "rectangle_2_1SignUp "></div>
        
       

       
    </div>
);

export default Signup;
