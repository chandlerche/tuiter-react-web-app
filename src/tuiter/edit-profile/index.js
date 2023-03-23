import React from "react";
import EditProfileItem from "../edit-profile/edit-profile-item";
import {useSelector} from "react-redux";


const EditProfileComponent = () => {
    const editProfileArray = useSelector(state => state.editProfile)

    return(
        <>
            {

                editProfileArray.map(item =>
                                         <EditProfileItem
                                             key={item._id}
                                             item={item}
                                         />
                )
            }


        </>
    );
};
export default EditProfileComponent;