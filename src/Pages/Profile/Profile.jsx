import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Profile = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    return (
        <div className='flex justify-center items-center h-[70vh]'>
            <div>
                <h1>{user?.email}</h1>
                <h1>Profile</h1>
            </div>
        </div>
    );
};

export default Profile;