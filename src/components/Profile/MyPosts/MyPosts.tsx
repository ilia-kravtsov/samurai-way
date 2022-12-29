import React from 'react';
import myPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 11, disLikesCount: 1},
    {id: 2, message: 'It is my first post',  likesCount: 7, disLikesCount: 2},
]

let postsDataContent = postsData.map( p =>
    <Post message={p.message} likesCount={p.likesCount} disLikesCount={p.disLikesCount}/>
);

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
                {postsDataContent}
            </div>
        </div>
    );
}

export default MyPosts;
