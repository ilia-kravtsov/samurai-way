import React from 'react';
import myPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsType = {
    postsData: Array<{id: number, message: string, likesCount: number, disLikesCount: number}>
}

const MyPosts = (props: MyPostsType) => {

    let postsDataContent = props.postsData.map( p =>
        <Post message={p.message} likesCount={p.likesCount} disLikesCount={p.disLikesCount}/>
    );

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
