import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import useServices from '../../../Hooks/useServices';
import { CiMenuKebab } from 'react-icons/ci';
import axios from 'axios';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("https://server-site-assignment-eight.vercel.app/assignment", { withCredentials: true })
            .then(res => {
                const homeFeature = res.data.slice(0, 9);

                setServices(homeFeature);
            })
    }, []);

    return (
        <div className='flex flex-col items-center justify-center mt-5'>
            <div className='text-center space-y-1 mt-5 lg:mt-15'>
                {/* <h3 className='text-3xl text-orange-400'>Feature section</h3> */}
                <h1 className='text-5xl'>Our <span className='text-yellow-500'>Assignment</span> Area</h1>
                <p className='w-full lg:w-3/4 mx-auto pt-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
                {
                    services.map((feature, index) => <div key={index} className=" rounded-xl p-0 m-0 justify-between flex flex-col bg-base-100  border-2">
                        <div className=" rounded-xl p-0 m-0 justify-between flex flex-col   border-2">
                            <figure className="relative">
                                <img src={feature.thumbnailURL} alt="feature" className="rounded-xl w-full h-[200px]" />
                            </figure>
                            <div className=" py-5 px-3 text-left space-y-2  ">
                                <div>
                                    <div className='flex items-center gap-3'>
                                        <img src={feature?.photoURL} alt="" className='w-10 rounded-full' />
                                        <h1>{feature?.displayName}</h1>
                                    </div>
                                </div>
                                <h2 className="card-title text-2xl">{feature.title}</h2>
                                <div>{feature.description.slice(0, 35)} <Link to={`/view/${feature._id}`}>...see more</Link></div>
                                <p>{feature.dueDate}</p>
                                <div className="card-actions flex justify-between items-center">
                                    <Link className="text-orange-400">Marks:  {feature.marks}</Link>
                                    <Link to={`/view/${feature._id}`} className="  btn btn-sm btn-warning">View</Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <Link to="/assignments" className='btn btn-outline btn-warning mt-7'>More Services</Link >
            </div>
        </div>
    );
};

export default Services;