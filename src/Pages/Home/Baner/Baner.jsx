import React from 'react';
import banner1 from "../../../assets/images/banner/1.jpg"
const Baner = () => {
    return (
        <div>
            <div className='mb-5 relative '>
                <div className=''>
                    <img src={banner1} alt="" className='w-full h-[400px] lg:h-[90vh]  rounded-lg' />
                </div>
                <div className="absolute inset-0 bg-opacity-90 flex items-center justify-start p-2 bg-gradient-to-r from-gray-200">
                    <div className="flex justify-between items-center flex-col lg:flex-row px-10 ">
                        <div className="flex-1 space-y-2 text-black">
                            <h1 className="font-bold ">Box Office News!</h1>
                            <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-warning btn-sm dark:btn-dark-warning">Get Started</button>
                        </div>
                        <div className="flex-1 hidden lg:flex justify-end">
                            <img
                                src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150314651.jpg?w=740&t=st=1699128827~exp=1699129427~hmac=0c34064cffaf0f3148be98ddda5bbc3f618c57ca18c5dbdb951b8648cf1b196e"
                                className="max-w-sm rounded-lg shadow-2xl dark:shadow-2xl-dark shadow-black pb-3 border-b-4 border-r-4 pr-2"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Baner;

// bg-opacity-70
// bg-opacity-70
// bg-opacity-70
// bg-opacity-70