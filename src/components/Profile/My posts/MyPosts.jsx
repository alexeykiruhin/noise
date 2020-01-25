import React, { Component } from 'react';
import css from './MyPosts.module.css';

class MyPosts extends Component {
  render() {
    return(
      <div className={css.profile}>
        My posts
        <div>
          New post
        </div>
        <div className={css.posts}>
          <div className={css.item}>
            post 1
          </div>
          <div className={css.item}>
            post 2
          </div>
        </div>
      </div>
    );
  }
}

export default MyPosts
