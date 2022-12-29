import React from 'react';
import myPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';

const myPostData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 11, disLikesCount: 1},
    {id: 2, message: 'It is my first post',  likesCount: 7, disLikesCount: 2},
]

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
                <Post message={myPostData[0].message} likesCount={myPostData[0].likesCount} disLikesCount={myPostData[0].disLikesCount}/>
                <Post message={myPostData[1].message} likesCount={myPostData[1].likesCount} disLikesCount={myPostData[1].disLikesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;
