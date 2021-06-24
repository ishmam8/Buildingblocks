import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import './css/Signup.css';
import GoogleIcon from "../images/new-google-favicon-512.png"

export class FacebookButton extends Component {
    responseFacebook=(response)=>{
        console.log(response);
    }
    render() {
        return (
            <div>
                <FacebookLogin
                appId="530654214739999"
                cssClass="customGoogleButton"
                icon={<i className="test" style={{marginLeft:'5px'}}></i>}
                textButton = "Sign-up with Facebook"  
                autoLoad={true}
                fields="name,email,picture"
                //onClick={componentClicked}
                callback={this.responseFacebook} />
            </div>
        )
    }
}

export default FacebookButton
