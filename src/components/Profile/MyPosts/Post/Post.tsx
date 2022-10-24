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
            <img src='https://wantshop.ru/media/tmp/6b79c121716e872a9fb16be3ea0f85ea.jpeg' alt='littleGroot'/>
            {props.message}
            <div>
                <span>{props.like}</span>
                <span>{props.likeCounts}</span>
            </div>
        </div>
    );
}

export default Post;
