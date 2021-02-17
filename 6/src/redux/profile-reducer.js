import {usersAPI} from "../api/api";

let  initialState =  {
    profile: null,
}

const profileReducer = (state= initialState, action) => {

     switch (action.type) {
         case "SER-USER-PROFILE" : {
             return {...state, profile: action.profile}
         }
        default :
            return state;
    }
}

export const setUsersProfileActionCreator = (profile) => ({type: "SER-USER-PROFILE", profile});

export const setUsersProfileThunkCreator = (userId) => async (dispatch) => {
    const data = await usersAPI.getProfileC(userId)
    dispatch(setUsersProfileActionCreator(data.data));
}

export default profileReducer;