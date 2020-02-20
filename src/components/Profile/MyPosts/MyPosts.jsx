import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let handleAddPost = () => {
        props.addPost();
    };

    let handleChangeTextArea = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };
    const listPost = props.posts.map(post => <Post msg={post.text} key={post.id} id={post.id} />);

    return (
        <div className={css.postWrapper}>
            <h3>My posts</h3>
            <div className={css.newPost}>
                <p>New post</p>
                <textarea value={props.newPostText}
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
