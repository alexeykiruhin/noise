import React from 'react';
import css from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={css.profile}>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile
