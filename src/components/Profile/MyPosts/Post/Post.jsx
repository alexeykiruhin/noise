import React, {Component} from 'react';
import css from './Post.module.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.msg = props.msg;
    }
    render() {
        return (
            <div className={css.item}>
                <div className={css.header}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWH4Cn0WSeEOZD4SN1RmLjJ5Y8zfVPVIloABnItkt4aIoODw1uQ&s" alt="avatar"/>
                    <span>{this.msg}</span>
                </div>
                <div className={css.nav}>
                    <span>Like</span>
                    <span>Dislike</span>
                </div>
            </div>
        );
    }
}

export default Post
