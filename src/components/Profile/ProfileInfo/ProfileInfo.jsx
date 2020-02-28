import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";

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
                    <img src={props.profile.photos.large} alt='avatar'/>
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo
