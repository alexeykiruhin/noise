import React, {Component} from 'react';
import css from './Post.module.css';

class Post extends Component {
    render() {
        return (
            <div className={css.item}>
                post 1
            </div>
        );
    }
}

export default Post
