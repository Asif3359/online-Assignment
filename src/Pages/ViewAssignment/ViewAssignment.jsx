import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ViewAssignment = () => {
    // const assignment = useLoaderData();
    const { id } = useParams();
    const [assignment, setAssignment] = useState({})

    useEffect(() => {
        axios.get(`https://server-site-assignment-eight.vercel.app/assignment/${id}`)
            .then(res=>{
                const data = res.data;
                setAssignment(data);
            })
    }, [])
    return (
        <div className=' py-5 container mx-auto '>

            <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-4  items-center  border border-gray-200 ">
                <div className='lg:col-span-3 '>
                    <img className=" h-[50vh] md:h-[80vh] w-full  " src={assignment.thumbnailURL} alt="" />
                </div>
                <div className=" p-2">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight ">{assignment.title}</h5>
                    <h5 className="mb-2  font-bold tracking-tight ">{assignment.difficulty}</h5>
                    <h5 className="mb-2  font-bold tracking-tight ">Marks: {assignment.marks}</h5>
                    <h5 className="mb-2  font-bold tracking-tight ">Submission Date : {assignment.dueDate}</h5>
                    <p className="mb-3 font-normal  ">{assignment.description}</p>
                    <Link to={`/take/${assignment._id}`} className='btn btn-sm btn-primary'>Take Assignment</Link >
                </div>
            </div>

        </div>
    );
};

export default ViewAssignment;