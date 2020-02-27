import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import user_no_photo from '../../../images/user_no_photo_100x100.png'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png" alt="img"/>
            </div>
            <div className={css.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large} alt={user_no_photo}/>
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo
