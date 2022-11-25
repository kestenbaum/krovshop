import React, {FC} from 'react';
import ProfileInfo from "./ProfileInfo";
import ProfileData from "./ProfileData";

export const ProfilePage: FC = () => {
    return (
        <div className='profile-page'>
            <div className="container">
                <div className="profile-wrapper">
                    <ProfileInfo/>
                    <ProfileData/>
                </div>
            </div>
        </div>
    );
};
