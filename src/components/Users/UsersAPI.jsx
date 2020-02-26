import React, {Component} from "react";
import * as axios from "axios";
import Pagination from "./Pagination/Pagination";
import Users from "./Users";

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

class UsersAPI extends Component {

    getUsers = () => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                if (this.props.totalUsersCount === 0){
                    this.props.getUsersTotalCount(res.data.totalCount);
                }
            });
    };

    componentDidMount = () => {
        this.getUsers();
    };

    render = () => {
        return <div>
            <div>
                <Pagination totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            getUsers={this.getUsers}
                            changeCurrentPage={this.props.changeCurrentPage} />
            </div>
            <Users users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow} />
        </div>
    };
}

export default UsersAPI;