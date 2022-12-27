import React from "react";
import postStyle from './Post.module.css';

type PostType = {
    message: string;
    likesCount: number;
    disLikesCount: number;
}

const Post = (props: PostType) => {
    return (
        <div className={postStyle.item}>
            <img src='https://wantshop.ru/media/tmp/6b79c121716e872a9fb16be3ea0f85ea.jpeg' alt='littleGroot'/>
            <span className={postStyle.span}>{props.message}</span>
            <div className='margin_left'>
                <button className={`${postStyle.margin_inline_end} ${postStyle.border_radius}`}>Like</button>
                <span>{props.likesCount}</span>
                <button className={`${postStyle.margin_inline_end} ${postStyle.margin_left} ${postStyle.border_radius}`}>Dislike</button>
                <span>{props.disLikesCount}</span>
            </div>
        </div>
    );
}

export default Post;
