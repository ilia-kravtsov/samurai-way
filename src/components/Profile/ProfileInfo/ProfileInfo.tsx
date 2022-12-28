import React from 'react';
import ProfileInfoStyle from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=a69847b56ccbe331769d0552889e756a-5234578-images-thumbs&n=13"
                    alt="Groot"/>
            </div>
            <div className={ProfileInfoStyle.descriptionBlock}>
                ava + description
            </div>

        </div>
    );
}

export default ProfileInfo;
