import React from "react";
import {useSelector} from "react-redux";
import ProfileBoard from "./profile-item.js"

const ProfileComponent = () => {

    const profile = useSelector(state => state.profile);
    return(
        <>
            <ProfileBoard profile = {profile}/>
        </>
    );
};

export default ProfileComponent;