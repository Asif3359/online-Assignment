import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import MySubmitAssign from './MySubmitAssign';
import axios from 'axios';

const MySubmit = () => {
    const { user } = useContext(AuthContext);
    const [submitAssignments, setSubmitAssignments] = useState([])
    useEffect(() => {

        axios.get(`https://server-site-assignment-eight.vercel.app/submitAssignment`,{withCredentials:true})
            .then(res => {
                const data = res.data;
                console.log(data);
                // const PendingAssignment = data.filter((assignment) => assignment.pending === true);
                const PendingAssignmentForUser = data.filter((assignment) => assignment.submitEmail === user.email);
                setSubmitAssignments(PendingAssignmentForUser);
            })
    }, [])
    return (
        <div className='p-4'>
            <div>
                <div className='mb-5 relative rounded-lg'>
                    <img src="https://img.freepik.com/free-vector/tasks-schedule-concept-with-people-making-notes_107791-15370.jpg?w=1380&t=st=1699126173~exp=1699126773~hmac=29b4d682336180b1fd125099f01a52888659860c28b40e58c0efd2dadb3b9c6b" alt="" className='w-full h-44 rounded-lg' />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start p-2">
                        <p className="text-white text-2xl"> Your Submitted Assignment</p>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Examinee Name</th>
                            <th>Assignment Marks</th>
                            <th>Pending Status</th>
                            <th>Your Marks</th>
                            <th>Feed Back</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submitAssignments.map(submitAssignment => <MySubmitAssign key={submitAssignment._id} submitAssignment={submitAssignment}></MySubmitAssign>)
                        }
                    </tbody>
                </table >
            </div>
        </div>
    );
};

export default MySubmit;