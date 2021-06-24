import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export class FacebookButton extends Component {
    responseFacebook=(response)=>{
        console.log(response);
    }
    render() {
        return (
            <div>
                <FacebookLogin
                appId="530654214739999"
                autoLoad={true}
                fields="name,email,picture"
                //onClick={componentClicked}
                callback={this.responseFacebook} />
            </div>
        )
    }
}

export default FacebookButton
