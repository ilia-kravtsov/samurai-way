import React, {RefObject} from 'react';
import myPostsStyle from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsType = {
    postsData: Array<{id: string, message: string, likesCount: number, disLikesCount: number}>
    addPost: any
}

const MyPosts = (props: MyPostsType) => {

    let postsDataContent = props.postsData.map( p =>
        <Post message={p.message} likesCount={p.likesCount} disLikesCount={p.disLikesCount} key={p.id}/>
    );

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        let text = newPostElement.current?.value
        props.addPost(text)
    }

    return (
        <div className={myPostsStyle.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea className={myPostsStyle.border_radius} ref={newPostElement}></textarea>
                </div>
                <div>
                    <button className={myPostsStyle.border_radius} onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={myPostsStyle.posts}>
                {postsDataContent}
            </div>
        </div>
    );
}

export default MyPosts;
