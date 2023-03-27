import { createSlice } from "@reduxjs/toolkit";

const profile = {
    "firstName": "Jianhua", "lastName": "Che", "handle": "@jche2364","tweetNum":103,
    "profilePicture": "bob.jpg", 	"bannerPicture": "banner.jpg",
    "bio": "Computer Science Student. Currently looking for SDE interns.",
    "website": "https://github.com/chandlerche",
    "location": "Boston, MA",	"dateOfBirth": "1994-10-26",	"dateJoined": "4/2012",
    "followingCount": 340,	"followersCount": 223
}

const profileSlice = createSlice({
                                     name: 'profile',
                                     initialState: profile,
                                     reducers: {
                                         changeFName(state, action) {
                                             state.firstName = action.payload.firstName;
                                         },
                                         updateProfile(state, action) {
                                             console.log(action.payload);
                                             return state = action.payload;
                                         }
                                     }
                                 });
export default profileSlice.reducer;
export const {changeFName,updateProfile} = profileSlice.actions;
