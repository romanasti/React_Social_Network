import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, messages: 'Hi, how are you?', likesCount: 15},
        {id: 2, messages: "It's my first post", likesCount: 10},
    ]

    let postsElements = posts.map(p => <Post message={p.messages} likesCount={p.likesCount}/>)

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            { postsElements }
        </div>
    </div>
}

export default MyPosts;
