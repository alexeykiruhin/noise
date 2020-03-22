import React from "react";
import css from "./Users.module.css";
import user_no_photo from "../../images/user_no_photo_100x100.png"
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <NavLink to={'profile/' + u.id}>
                            <img
                                src={u.photos.small != null
                                    ? u.photos.small
                                    : user_no_photo}
                                className={css.avatar}
                                alt={user_no_photo}
                            />
                        </NavLink>
                    </div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id);
                                usersAPI.unfollow(u.id).then(data => {
                                        if (data.resultCode === 0){
                                            props.unfollow(u.id);
                                        }
                                        props.toggleIsFollowingProgress(false, u.id);
                                    });

                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id);
                                usersAPI.follow(u.id).then(data => {
                                            if (data.resultCode === 0){
                                                props.follow(u.id)
                                            }
                                            props.toggleIsFollowingProgress(false, u.id);
                                });
                            }}>Follow</button>}
                    </div>
                </div>
            </div>)
        }
    </div>
};

export default Users;