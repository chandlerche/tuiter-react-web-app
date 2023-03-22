import React from "react";
import {useSelector} from "react-redux";
import ProfileItem from "./profile-item";

const ProfileComponent = () => {
    const profileArray = useSelector(state => state.profile)
    return (
        <>
            {
                profileArray.map(item =>
                                   <ProfileItem
                                       key={item._id} item={item}/> )
            }
        </>

    );
};

export default ProfileComponent;