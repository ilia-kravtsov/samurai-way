import React from "react";
import s from './Post.module.css';

type PostType = {
    message: string;
    likeCounts: number;
    like: string;
}

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src='https://i.imgur.com/J9fmQeth.jpg' alt='shelby'/>
            {props.message}
            <div>
                <span>{props.like}</span>
                <span>{props.likeCounts}</span>
            </div>
        </div>
    );
}

export default Post;
