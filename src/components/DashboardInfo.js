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
       setEditProfile(true);
    };

    
        return ( 
             (!editProfile) ? (
                <div>
                <div className="dashboard-info">
                    <button type="button"
                        className="editProfile"
                        onClick={_editProfile}
                    >
                        <img className="editImage"
                            src={edit}
                            height="11px"
                            width="13px"
                        />
                            Edit
                        </button>
                    <Popup
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
                    />

                    <img alt="User Avatar" className="img"
                        src={require("../images/icons/" + avi + ".png")}
                    />
                    <table className="profile-info-table">
                        <tr>
                            <td className="profile-field">Username</td>
                            <td className="profile-field-entry">{username}</td>
                        </tr>
                        <tr>
                            <td className="profile-field">Email</td>
                            <td className="profile-field-entry">{email}</td>
                        </tr>
                    </table>
                    <table className="profile-info-table">
                        <tr>
                            <td className="profile-field-entry">{bio}</td>
                        </tr>
                    </table>
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