import React from "react";
import css from "./Users.module.css";
import user_no_photo from "../../images/user_no_photo_100x100.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                            ? <button onClick={() => {
                                axios
                                    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "35887523-f908-4964-bb2a-ce132331f49c"
                                        }
                                        })
                                    .then(res => {
                                        if (res.data.resultCode === 0){
                                            props.unfollow(u.id);
                                        }
                                    });

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                    axios
                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "35887523-f908-4964-bb2a-ce132331f49c"
                                            }})
                                        .then(res => {
                                            if (res.data.resultCode === 0){
                                                props.follow(u.id)
                                            }
                                        });
                            }}>Follow</button>}
                    </div>
                </div>
            </div>)
        }
    </div>
};

export default Users;