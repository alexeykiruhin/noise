import React, {Component} from "react";
import {connect} from "react-redux";
import {
    changeCurrentPageAC,
    followAC,
    getUsersTotalCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/users_reducer";
import * as axios from "axios";
import Pagination from "./Pagination/Pagination";
import Users from "./Users";

class UsersContainer extends Component {

    getUsers = () => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                if (this.props.totalUsersCount === 0){
                    this.props.getUsersTotalCount(res.data.totalCount);
                }
            });
    };

    componentDidMount = () => {
        this.getUsers();
    };

    render = () => {
        return <div>
            <div>
                <Pagination totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            getUsers={this.getUsers}
                            changeCurrentPage={this.props.changeCurrentPage} />
            </div>
            <Users users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow} />
        </div>
    };
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        getUsersTotalCount: (tuc) => {
            dispatch(getUsersTotalCountAC(tuc));
        },
        changeCurrentPage: (currentPage) => {
            dispatch(changeCurrentPageAC(currentPage));
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
