import React from "react";
import {connect} from "react-redux";
import {
    addUserActionCreator,
    deleteUserActionCreator,
    requestUsersThunkCreator,
    setCurrentPageActionCreator,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersSuperSelector,
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return<>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   deleteUser={this.props.deleteUser}
                   addUser={this.props.addUser}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return{
        users:getUsersSuperSelector (state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),

    }
}

export default connect(mapStateToProps, {
    setCurrentPage: setCurrentPageActionCreator,
    requestUsers: requestUsersThunkCreator,
    deleteUser: deleteUserActionCreator,
    addUser: addUserActionCreator,
})(UsersContainer);

