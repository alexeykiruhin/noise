import React, {Component} from 'react';
import css from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends Component {

    render() {
        return (
            <div className={css.profile}>
                <ProfileInfo />
                <MyPosts profilePage={this.props.profilePage}
                         addPost={this.props.addPost}
                         changeNewPostText={this.props.changeNewPostText}/>
            </div>
        );
    }
}

export default Profile
