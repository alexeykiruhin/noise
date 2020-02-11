import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile_reducer";


const MyPosts = (props) => {

    let handleAddPost = () => {
        console.log('add');
        props.dispatch(addPostActionCreator());
    };

    let handleChangeTextArea = (e) => {
        let text = e.target.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);
    };

    const listPost = props.profilePage.posts.map(post => <Post msg={post.text} id={post.id} />);

    return (
        <div className={css.postWrapper}>
            <h3>My posts</h3>
            <div className={css.newPost}>
                <p>New post</p>
                <textarea value={props.profilePage.value}
                          onChange={handleChangeTextArea}/>
                <br/>
                <button onClick={handleAddPost}>Post</button>
            </div>
            <div className={css.posts}>
                {listPost}
            </div>
        </div>
    );
};

export default MyPosts;
