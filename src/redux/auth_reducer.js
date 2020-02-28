const SET_USER_DATA = 'SET_USER_DATA';
const SET_RESULT_CODE = 'SET_RESULT_CODE';

let initialState = {
    id: null,
    email: null,
    login: null,
    resultCode: null,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case SET_RESULT_CODE:
            return {
                ...state,
                resultCode: action.code,
            };
        default:
            return state;
    }
};

export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});
export const setResultCode = (code) => ({type: SET_RESULT_CODE, code});
export default authReducer;