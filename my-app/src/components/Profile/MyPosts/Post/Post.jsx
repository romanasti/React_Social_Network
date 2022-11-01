import React from 'react';
import s from './Post.module.css'

const Post = () => {
  return <div className={s.item}>
    <img src='https://i.ytimg.com/vi/6I4TN185Szw/maxresdefault.jpg' />
    post 1
    <div>
      <span>like</span>
    </div>
  </div>
}

export default Post;
