import React, {Component} from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";

class MyPosts extends Component {
    render() {
        return (
            <div className={css.profile}>
                ava + description
                My posts
                <div>
                    New post
                </div>
                <div className={css.posts}>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        );
    }
}

export default MyPosts
