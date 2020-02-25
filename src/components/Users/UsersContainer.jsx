import Users from "./Users";
import {connect} from "react-redux";
import {
    changeCurrentPageAC,
    followAC,
    getUsersTotalCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/users_reducer";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
