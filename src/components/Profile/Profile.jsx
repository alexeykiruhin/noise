import React, {Component} from 'react';
import css from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.messages = props.messages;
    }

    render() {
        return (
            <div className={css.profile}>
                <ProfileInfo/>
                <MyPosts messages={this.messages}/>
            </div>
        );
    }
}

export default Profile
