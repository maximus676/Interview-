import {usersAPI} from "../api/api";

let  initialState =  {
    users : [],
    pageSize: 5,
    totalUsersCount:0,
    currentPage: 1,
    isFetching: true,
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE":{
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT":{
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case "DELETE-USERS":{
            let test = [...state.users];
            test.splice(action.userId, 1)
            return {
                ...state,
                users: test
            }
        }
        case "ADD-USER":{
            let newUser = {
                id:13,
                email: action.email,
                first_name: action.first_name,
                last_name: action.last_name,
                avatar: action.avatar,
            };
            return {
                ...state,
                users: [newUser, ...state.users]
            }
        }

        default:
            return state;
    }
}

export const setIsFetchingActionCreator = (isFetching) => ({type: "TOGGLE-IS-FETCHING", isFetching});
export const setUsersActionCreator = (users) => ({type: "SET-USERS", users,});
export const setCurrentPageActionCreator = (currentPage) => ({type: "SET-CURRENT-PAGE", currentPage});
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: "SET-TOTAL-USERS-COUNT", totalUsersCount});
export const deleteUserActionCreator = (userId) => ({type: "DELETE-USERS", userId});
export const addUserActionCreator = (first_name, last_name, email, avatar) => ({type:"ADD-USER", first_name, last_name, email, avatar});

export const requestUsersThunkCreator = (page, pageSize) => async (dispatch) => {
    dispatch(setIsFetchingActionCreator(true));

    const data = await usersAPI.getUsers(page, pageSize);
    dispatch(setIsFetchingActionCreator(false));
    dispatch(setUsersActionCreator(data.data));
    dispatch(setTotalUsersCountActionCreator(data.total));
    dispatch(setCurrentPageActionCreator(page));
}

export default usersReducer;