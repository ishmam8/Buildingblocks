import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios'
export class GoogleButton extends Component {
    responseSuccessGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
        axios({
            method: "POST",
            url: "http://localhost:5000/users/login",
            data: {tokenId: response.tokenId}
        }).then(response => {
            console.log(response);
        })
    }
    responseErrorGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }
    render() {
        return (
            <div>
                <GoogleLogin 
                clientId="617015858222-1ddpao4ifrsv6i6e9430ljrjfe9mnfe0.apps.googleusercontent.com"
                buttonText="Signup with Google"
                onSuccess={this.responseSuccessGoogle}
                onFailure={this.responseErrorGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

export default GoogleButton
