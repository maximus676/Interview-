import React from 'react';
import './App.css';
import UsersContainer from "./components/Users/UsersContainer";
import {Route, Switch} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import Redirect from "react-router-dom/es/Redirect";
import "antd/dist/antd.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";




class App extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route
                            path='/profile/:userId?'
                            render={() => <ProfileContainer />}/>
                        <Route exact
                            path='/'
                            render={() => <Redirect to={"/users"} /> } />
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>

                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({

})

export default compose(
    withRouter,
    connect(mapStateToProps, {
         })) (App);