import React, {FC} from 'react';
import ProfileInfo from "./ProfileInfo";
import ProfileData from "./ProfileData";

const ProfilePage: FC = () => {

    //Todo change naming class

    return (
        <div className='profile-page'>
            <div className="container">
                <div className="profile-wrapper">
                    {/*---- Profile info user ----*/}
                    <ProfileInfo/>

                    {/*---- profile data ----*/}
                    <ProfileData/>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ProfilePage);