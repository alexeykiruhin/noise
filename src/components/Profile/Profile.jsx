import React, {Component} from 'react';
import css from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.posts = props.posts;
    }

    render() {
        return (
            <div className={css.profile}>
                <ProfileInfo/>
                <MyPosts posts={this.posts}/>
            </div>
        );
    }
}

export default Profile
