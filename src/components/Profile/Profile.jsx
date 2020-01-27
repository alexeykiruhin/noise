import React, {Component} from 'react';
import css from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.profilePage = props.profilePage;
        this.addPost = props.addPost;
        this.changeValue = props.changeValue;
    }

    render() {
        return (
            <div className={css.profile}>
                <ProfileInfo />
                <MyPosts profilePage={this.profilePage} addPost={this.addPost} changeValue={this.changeValue}/>
            </div>
        );
    }
}

export default Profile
