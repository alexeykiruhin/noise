import React, {Component} from "react";
import css from "./Users.module.css";
import * as axios from "axios";
import user_no_photo from "../../images/user_no_photo_100x100.png"

// let Users = (props) => {
//
//     let getUsers = () => {
//         if (props.users.length === 0) {
//
//             axios
//                 .get("https://social-network.samuraijs.com/api/1.0/users?count=4")
//                 .then( response => {
//                     console.log(response.data.items);
//                     props.setUsers(response.data.items);
//             });
//
//         }
//     };
//
//     return <div>
//         <button onClick={getUsers}>getUsers</button>
//         {
//             props.users.map(u => <div key={u.id}>
//                 <div>
//                     <div>
//                         <img
//                             src={u.photos.small != null
//                             ? u.photos.small
//                             : user_no_photo}
//                             className={css.avatar}
//                         />
//                     </div>
//                     <div>
//                         <div>{u.name}</div>
//                         <div>{u.status}</div>
//                     </div>
//                     <div>
//                         <div>{'u.location.country'}</div>
//                         <div>{'u.location.city'}</div>
//                     </div>
//                     <div>
//                         {u.followed
//                             ? <button onClick={() => {
//                                 props.unfollow(u.id)
//                             }}>Unfollow</button>
//                             : <button onClick={() => {
//                                 props.follow(u.id)
//                             }}>Follow</button>}
//                     </div>
//                 </div>
//             </div>)
//         }
//     </div>
// };

class Users extends Component {

    getUsers = (page) => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=4`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.getUsersTotalCount(res.data.totalCount);
            });
    };

    componentDidMount = () => {
        this.getUsers();
    };

    changePage = (currentPage) => {
        this.getUsers(currentPage);
        this.props.changeCurrentPage(currentPage);
    };

    pagination = () => {
        let pagesCount = this.props.totalUsersCount / this.props.pageSize;
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        let visionPages = [
            ...pages.slice(this.props.currentPage - 1, this.props.currentPage + 2),
            '...',
            ...pages.slice(-3)
        ];
        return visionPages.map(p => {
            return <span
                key={p}
                className={this.props.currentPage === p ? css.selectPage : ''}
                onClick={() => this.changePage(p)}
            >{p} </span>
        })
    };

    render = () => {
        return <div>
            <div>
                {this.pagination()}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <img
                                src={u.photos.small != null
                                    ? u.photos.small
                                    : user_no_photo}
                                className={css.avatar}
                                alt={user_no_photo}
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
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                </div>)
            }
        </div>
    };
}

export default Users;