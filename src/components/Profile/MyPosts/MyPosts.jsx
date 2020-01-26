import React, {Component} from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";

class MyPosts extends Component {
    render() {
        return (
            <div className={css.profile}>
                My posts
                <div className={css.newPost}>
                    <p>New post</p>
                    <textarea> </textarea>
                    <br/>
                    <button>Post</button>
                </div>
                <div className={css.posts}>
                    <Post msg='Hi man, droped liked a? ;)'/>
                    <Post msg='Waaasaap man!'/>
                </div>
            </div>
        );
    }
}

export default MyPosts
