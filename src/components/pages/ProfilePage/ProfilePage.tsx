import React, {FC} from 'react';
import Avatar from '../../../assets/img/avatar.jpg'

const ProfilePage: FC = () => {

    //Todo change naming class

    return (
        <div className='profile-page'>
            <div className="container">
                <div className="profile-wrapper">
                    {/*---- Profile info user ----*/}
                    <div className="profile-info">
                        <div className="profile-avatar">
                            <img className='user-avatar' src={Avatar} alt="user-avatar"/>
                        </div>

                        <div className="profile-names">
                            <span className='profile-user'>Name</span>
                            <span className='profile-user'>UserName</span>
                        </div>
                    </div>

                    {/*---- profile data ----*/}
                    <div className="profile-data">
                        <span>phone</span>
                        <span>mail</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;