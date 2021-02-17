import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto} profile = {props.profile}/>
        </div>
    );
}


export default Profile;