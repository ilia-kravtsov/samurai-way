import React from 'react';
import myPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={myPostsStyle.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea className={myPostsStyle.border_radius}></textarea>
                </div>
                <div>
                    <button className={myPostsStyle.border_radius}>Add Post</button>
                </div>
            </div>
            <div className={myPostsStyle.posts}>
                <Post message="Hi, how are you?" likesCount={11} disLikesCount={1}/>
                <Post message="It's my first post" likesCount={7} disLikesCount={2}/>
            </div>
        </div>
    );
}

export default MyPosts;
