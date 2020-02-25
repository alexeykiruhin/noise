const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const GET_TOTAL_USERS_COUNT = 'GET_TOTAL_USERS_COUNT';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';

let initialState = {
    users: [] ,
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            };
        case SET_USERS: {
            // for button 'show more'
            // return { ...state, users: [ ...state.users, ...action.users ]}
            // for pagination
            return { ...state, users: [ ...action.users ]}
        }
        case GET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.tuc,
            };
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const getUsersTotalCountAC = (tuc) => ({type: GET_TOTAL_USERS_COUNT, tuc});
export const changeCurrentPageAC = (currentPage) => ({type: CHANGE_CURRENT_PAGE, currentPage});
export default usersReducer;