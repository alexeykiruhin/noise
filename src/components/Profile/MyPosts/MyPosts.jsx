import React, {Component} from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../state/state";



class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
        this.handleAddPost = this.handleAddPost.bind(this);
    }


    handleAddPost() {
        console.log('add');
        this.props.dispatch(addPostActionCreator());
    }


    handleChangeTextArea(e) {
        let text = e.target.value;
        let action = updateNewPostActionCreator(text);
        this.props.dispatch(action);
    }

    render() {
        const listPost = this.props.profilePage.posts.map(post => <Post msg={post.text} id={post.id} />);
        return (
            <div className={css.postWrapper}>
                <h3>My posts</h3>
                <div className={css.newPost}>
                    <p>New post</p>
                    <textarea value={this.props.profilePage.value}
                              onChange={this.handleChangeTextArea} />
                    <br/>
                    <button onClick={this.handleAddPost}>Post</button>
                </div>
                <div className={css.posts}>
                    {listPost}
                </div>
            </div>
        );
    }
}

export default MyPosts;
