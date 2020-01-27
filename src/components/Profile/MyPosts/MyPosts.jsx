import React, {Component} from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";
import Dialog from "../../Communication/Dialogs/Dialog/Dialog";
import Message from "../../Communication/Messages/Message/Message";


class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.posts = props.posts;
    }

    render() {
        const listPost = this.posts.map(post => <Post msg={post} id={this.posts.indexOf(post)}/>);
        return (
            <div className={css.postWrapper}>
                <h3>My posts</h3>
                <div className={css.newPost}>
                    <p>New post</p>
                    <textarea> </textarea>
                    <br/>
                    <button>Post</button>
                </div>
                <div className={css.posts}>
                    {listPost}
                </div>
            </div>
        );
    }
}

export default MyPosts;
