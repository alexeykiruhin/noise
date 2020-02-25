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
    constructor(props) {
        super(props);
        this.state = {
            totalCount: null,
            pageCount: [],
            pageItemsCount: 4,
            currentPage: 1,
        };
    }

    getUsers = (page) => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=4`)
            .then(res => {
                let totalCount = res.data.totalCount;
                console.log('1 '+res.data.totalCount);
                let pCnt = Math.ceil((totalCount / this.state.pageItemsCount));
                let pageCount = [];
                for (let i = 1; i <= pCnt; i++) {
                    pageCount.push(i);
                }
                this.setState({totalCount, pageCount});
                this.props.setUsers(res.data.items);
            });
    };

    componentDidMount = () => {
        this.getUsers();
    };

    changePage = (currentPage) => {
        this.getUsers(currentPage);
        this.setState({
           currentPage
        });
    };

    pagination = () => {
        let pages = this.state.pageCount;
        let visionPages = [
            ...pages.slice(this.state.currentPage-1, this.state.currentPage + 2),
            '...',
            ...pages.slice(-3)
        ];
        console.log(pages.slice(0, 3));
        return visionPages.map(p => {
            return <span
                className={this.state.currentPage === p ? css.selectPage : ''}
                onClick={() => this.changePage(p)}
            >{p} </span>
        });
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