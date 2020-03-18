import React, {Component} from "react";
import {connect} from "react-redux";
import {
    changeCurrentPage,
    follow,
    getUsersTotalCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users_reducer";
import Pagination from "./Pagination/Pagination";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {getUsers} from "../../api/api";

class UsersContainer extends Component {

    getUsers = () => {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                if (this.props.totalUsersCount === 0){
                    this.props.getUsersTotalCount(data.totalCount);
                }
                this.props.toggleIsFetching(false);
            });
    };

    componentDidMount = () => {
        this.getUsers();
    };

    render = () => {
        let out;
        if (this.props.isFetching) {
            out = <Preloader />;
        } else {
            out = <div>
                <div>
                    <Pagination totalUsersCount={this.props.totalUsersCount}
                                pageSize={this.props.pageSize}
                                currentPage={this.props.currentPage}
                                getUsers={this.getUsers}
                                changeCurrentPage={this.props.changeCurrentPage} />
                </div>
                <div>
                    <Users users={this.props.users}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow} />
                </div>
            </div>;
        }
        return <div>{out}</div>
    };
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         getUsersTotalCount: (tuc) => {
//             dispatch(getUsersTotalCountAC(tuc));
//         },
//         changeCurrentPage: (currentPage) => {
//             dispatch(changeCurrentPageAC(currentPage));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         },
//
//     }
// };



export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    getUsersTotalCount,
    changeCurrentPage,
    toggleIsFetching,
})(UsersContainer);
