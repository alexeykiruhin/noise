import React from 'react';
import css from './Post.module.css';

const Post = (props) => {

        return (
            <div className={css.item}>
                <div className={css.header}>
                    {props.id}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWH4Cn0WSeEOZD4SN1RmLjJ5Y8zfVPVIloABnItkt4aIoODw1uQ&s" alt="avatar"/>
                    <span>{props.msg}</span>
                </div>
                <div className={css.nav}>
                    <span>Like</span>
                    <span>Dislike</span>
                </div>
            </div>
        );
};

export default Post
