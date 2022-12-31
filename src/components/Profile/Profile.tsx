import React from 'react';
import profileStyle from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfileType = {
    postsData: Array<{id: number, message: string, likesCount: number, disLikesCount: number}>;
}
const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}

export default Profile;
