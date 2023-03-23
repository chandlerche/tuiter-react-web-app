import { createSlice } from "@reduxjs/toolkit";
import editProfileInfo from './edit-profile-Info.json';

const editProfileSlice = createSlice({
                                         name: 'editProfileInfo',
                                         initialState: editProfileInfo
                                     });

export default editProfileSlice.reducer;