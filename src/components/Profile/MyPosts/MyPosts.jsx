import React, {Component} from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";


class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.posts = props.profilePage.posts;
        this.value = props.profilePage.value;
        this.addPost = props.addPost;
        this.changeValue = props.changeValue;
        this.handleChange = this.handleChange.bind(this);
        this.handleAddPost = this.handleAddPost.bind(this);
    }


    handleAddPost() {
        this.addPost();
    }


    handleChange(e) {
        let text = e.target.value;
        this.changeValue(text);
    }

    render() {
        const listPost = this.posts.map(post => <Post msg={post.text} id={post.id} />);
        return (
            <div className={css.postWrapper}>
                <h3>My posts</h3>
                <div className={css.newPost}>
                    <p>New post</p>
                    <textarea value={this.value} onChange={this.handleChange} />
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
