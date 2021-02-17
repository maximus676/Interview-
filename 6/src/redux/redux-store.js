import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";

import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import usersReducer from "./users-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,

    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;
