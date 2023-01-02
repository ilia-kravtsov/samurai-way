import React from 'react';
import profileStyle from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePageState: ProfilePageType
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePageState.postsData}/>
        </div>
    );
}

export default Profile;
