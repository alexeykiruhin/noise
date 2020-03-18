import * as axios from "axios";

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "35887523-f908-4964-bb2a-ce132331f49c"
    }
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`,)
        .then(res => res.data);
};

export const unfollow = (id) => {
    return instanse.delete(`follow/${id}`)
        .then(res => res.data);
};
export const follow = (id) => {
    return instanse.post(`follow/${id}`)
        .then(res => res.data);
};

export const getUserId = (userId) => {
    return instanse.get(`profile/${userId}`)
        .then(res => res.data);
};