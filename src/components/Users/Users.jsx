import React, {Component} from "react";
import css from "./Users.module.css";
import * as axios from "axios";
import user_no_photo from "../../images/user_no_photo_100x100.png"

/*let Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios
                .get("https://social-network.samuraijs.com/api/1.0/users?count=4")
                .then( response => {
                    console.log(response.data.items);
                    props.setUsers(response.data.items);
            });

        }
    };

    return <div>
        <button onClick={getUsers}>getUsers</button>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <img
                            src={u.photos.small != null
                            ? u.photos.small
                            : user_no_photo}
                            className={css.avatar}
                        />
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
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </div>
            </div>)
        }
    </div>
};*/

// class Users extends Component {
//
//     constructor(props) {
//         super(props);
//     }
//
//     componentDidMount() {
//         if (this.props.users.length === 0) {
//
//             axios
//                 .get("https://social-network.samuraijs.com/api/1.0/users?count=4")
//                 .then( response => {
//                     console.log(response.data.items);
//                     this.props.setUsers(response.data.items);
//                 });
//
//         }
//     }
//
//     render() {
//         return <div>
//             {
//                 this.props.users.map(u => <div key={u.id}>
//                     <div>
//                         <div>
//                             <img
//                                 src={u.photos.small != null
//                                     ? u.photos.small
//                                     : user_no_photo}
//                                 className={css.avatar}
//                             />
//                         </div>
//                         <div>
//                             <div>{u.name}</div>
//                             <div>{u.status}</div>
//                         </div>
//                         <div>
//                             <div>{'u.location.country'}</div>
//                             <div>{'u.location.city'}</div>
//                         </div>
//                         <div>
//                             {u.followed
//                                 ? <button onClick={() => {
//                                     this.props.unfollow(u.id)
//                                 }}>Unfollow</button>
//                                 : <button onClick={() => {
//                                     this.props.follow(u.id)
//                                 }}>Follow</button>}
//                         </div>
//                     </div>
//                 </div>)
//             }
//         </div>
//     }
// }

export default Users;