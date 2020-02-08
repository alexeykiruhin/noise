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
                         dispatch={this.props.dispatch} />
            </div>
        );
    }
}

export default Profile
