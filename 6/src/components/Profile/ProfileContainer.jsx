import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUsersProfileThunkCreator} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";



class ProfileContainer extends React.Component {


    refreshProfile(){
        let userId = this.props.match.params.userId
    if(!userId){
         userId = 1
    }
        this.props.setUsersProfile(userId);       /* Санка */

    }

    componentDidMount(){
        this.refreshProfile();
    }

    componentDidUpdate (prevProps, prevState, snapshot){
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile();
        }
    }

    render () {
        return (
                <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,


    }};

export default compose(
    connect (mapStateToProps, {
        setUsersProfile: setUsersProfileThunkCreator,

    }),
    withRouter,
)(ProfileContainer);