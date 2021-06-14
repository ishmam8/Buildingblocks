import React, { useState } from "react";
import { Popup } from 'semantic-ui-react';
import Avatars from './Avatars';
import edit from "../images/edit.png";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


export default function DashboardInfo() {
    const [editProfile, setEditProfile] = useState(false);
    const avi = useSelector(state => state.avi);
    const username = useSelector(state => state.username);
    const email = useSelector(state => state.email);
    const bio = useSelector(state => state.bio);

    function _chooseAvi(){
        document.body.style.overflow = 'hidden';
    };

    function _editProfile(){
        this.setState({
            editProfile: true,
        });
    };

    
        return ( 
             (!editProfile) ? (
                 
                <div className="main-container">
                    <div class="ui two column doubling grid container">
                        <div class="column"></div>
                    </div>
                </div>
                
                )

                 : (
                <Redirect to={{
                    pathname: '/editProfile',
                }} />
            )
        )
}
                /*<div>
                <div className="dashboard-info">
                    <div className="user-info">

                    
                
                    
                    

                    <img alt="User Avatar" className="img"
                        src={require("../images/icons/" + avi + ".png")}
                    />
                    <table className="profile-info-table">
                        <tr>
                            <td style={{textTransform: "capitalize"}} className="profile-field-entry">{username}</td>
                        </tr>
                        <tr>
                            <td style={{fontSize: "18px"}}className="profile-field-entry">{email}</td>
                        </tr>
                    </table>
                    
                </div>
                    <div className= "user-info-lower">
                    <div className= "bio-text">
                        <p>
                        Lorem Ipsum is simply dummy text 
                        of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to 
                        make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronics
                        <noscript>
                            {bio}
                        </noscript>
                        </p>
                    </div>
                <button type="button"
                        className="editProfile"
                        onClick={_editProfile}
                    >
                         Edit Profile
                        </button>
                    
                </div>
                </div>
            </div>*/
            

{/* <Popup
    content={<Avatars />}
    on='click'
    pinned
    className="popup"
    trigger={
        <button className="edit-avi">
            <img alt="Edit Avatar"
                width="15px"
                height="15px"
                src={require("../images/editavi.png")}
                onClick={_chooseAvi}
            />
        </button>
    }
/> */}