import React from 'react';
import css from './ProfileInfo.module.css';

const ProfileInfo = () => {

    return (
        <div>
            <div>
                <img src="https://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png" alt="img"/>
            </div>
            <div className={css.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
};

export default ProfileInfo
