import React from 'react';
import { AiFillCamera } from "react-icons/ai";
import { FcCamera } from "react-icons/fc";

const Profile = () => {
    return (
        <div className='flex justify-center items-center my-5 py-5'>
            <div>
                <h1 className='font-semibold text-3xl p-4'>Account Settings</h1>
                <div className='bg-base-200 h-[800px] lg:w-[1200px] p-5'>
                    <div className='flex gap-5 mt-4'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" />
                                <div className='absolute bottom-0 right-0 bg-violet-600 rounded-full p-2'>
                                    <AiFillCamera className=" text-white"></AiFillCamera>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h3 className='font-semibold text-2xl'>Marry Doe</h3>
                            <p>Marry@Gmail.com</p>
                        </div>
                    </div>
                    <p className='py-4 border-b-2 border-dashed'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus voluptatem molestias nisi dicta qui iste rerum sunt iure eveniet dolorum.</p>

                </div>
            </div>
        </div>
    );
};

export default Profile;