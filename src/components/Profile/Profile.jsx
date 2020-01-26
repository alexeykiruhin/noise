import React, {Component} from 'react';
import css from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

class Profile extends Component {
    render() {
        return (
            <div>
                <img src="https://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png" alt="img"/>
                <MyPosts/>
            </div>
        );
    }
}

export default Profile
