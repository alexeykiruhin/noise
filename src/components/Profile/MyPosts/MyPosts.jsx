import React, {Component} from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";
import Dialog from "../../Communication/Dialogs/Dialog/Dialog";


class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.messages = props.messages;
    }

    render() {
        const listPost = this.messages.map(item => <Post msg={item.text} id={item.id}/>);
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
