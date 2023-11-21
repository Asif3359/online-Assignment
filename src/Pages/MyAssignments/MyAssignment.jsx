import React from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyAssignment = ({ myAssignment,handleUpdate,handleDelete }) => {
    return (
        <div className=" rounded-xl p-0 m-0 justify-between flex flex-col   border-2">
            <figure className="relative">
                <img src={myAssignment.thumbnailURL} alt="myAssignment" className="rounded-xl w-full h-[200px]" />
                <div className='absolute right-0 -top-0'>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-sm btn-warning btn-circle"><CiMenuKebab></CiMenuKebab></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-lg  w-40 space-y-1 ">
                            <li><button onClick={() => handleUpdate(myAssignment._id, myAssignment.email)} className="  btn btn-sm">update</button></li>
                            <li><button onClick={() => handleDelete(myAssignment._id, myAssignment.email)} className="  btn btn-sm">Delete</button></li>
                        </ul>
                    </div>
                </div>
            </figure>
            <div className=" py-5 px-3 text-left space-y-2  ">
                <div>
                    <div className='flex items-center gap-3'>
                        <img src={myAssignment?.photoURL} alt="" className='w-10 rounded-full' />
                        <h1>{myAssignment?.displayName}</h1>
                    </div>
                </div>
                <h2 className="card-title text-2xl">{myAssignment.title}</h2>
                <div>{myAssignment.description.slice(0, 35)} <Link to={`/view/${myAssignment._id}`}>...see more</Link></div>
                <p>{myAssignment.dueDate}</p>
                <div className="card-actions flex justify-between items-center">
                    <Link className="text-orange-400">Marks:  {myAssignment.marks}</Link>
                    <Link to={`/view/${myAssignment._id}`} className="  btn btn-sm btn-warning">View</Link>
                </div>
            </div>
        </div>
    );
};

export default MyAssignment;