import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
    return (
        <div className='bg-base-100 px-5 lg:px-10 py-20 rounded-lg border-2 mx-5'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10'>
                <div className='flex justify-start gap-4 items-center'>
                    <div className='text-3xl'>
                        <FaCalendarAlt></FaCalendarAlt>
                    </div>
                    <div>
                        <p>We are open monday-friday</p>
                        <h2 className='text-xl'>7:00 am - 9:00 pm</h2>
                    </div>
                </div>
                <div className='flex justify-start gap-4 items-center'>
                    <div className='text-3xl'>
                        <FaPhoneVolume></FaPhoneVolume>
                    </div>
                    <div>
                        <p>Have a question?</p>
                        <h2 className='text-xl'>2546 251 2658</h2>
                    </div>
                </div>
                <div className='flex justify-start gap-4 items-center'>
                    <div className='text-3xl'>
                        <FaMapLocationDot></FaMapLocationDot>
                    </div>
                    <div>
                        <p>Need a repair? our address</p>
                        <h2 className='text-xl'>Liza Street, New York</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;