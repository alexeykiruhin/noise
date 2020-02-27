import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {

    return (
        <div>
            <div>
                <img src="https://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png" alt="img"/>
            </div>
            <div className={css.descriptionBlock}>
                <div>
                    avatar
                </div>
                <div>
                    {props.profile ? props.profile.aboutMe : <Preloader />}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo
