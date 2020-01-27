import React, {Component} from 'react';
import css from './ProfileInfo.module.css';

class ProfileInfo extends Component {
    render() {
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
    }
}

export default ProfileInfo
