import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import ProfileReducer from "./profile/profile-reducer.js"

const store = configureStore({
    reducer: {
        who: whoReducer,
        tuits: tuitsReducer,
        profile:ProfileReducer
    }
});

export default store;