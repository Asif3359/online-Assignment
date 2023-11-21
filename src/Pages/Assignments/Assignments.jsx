import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Assignment from './Assignment';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import axios from 'axios';

const Assignments = () => {
    const { user } = useAuth();
    const [assignments, setAssignments] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedDifficulty, setSelectedDifficulty] = useState('All'); // Initialize with 'All' as the default difficulty

    useEffect(() => {
        axios.get('https://server-site-assignment-eight.vercel.app/assignment',{withCredentials:true})
            .then(res => {
                const data = res.data;
                const filteredAssignments = data.filter(assignment => {
                    if (selectedDifficulty === 'All') {
                        return true; // Show all assignments
                    } else {
                        return assignment.difficulty === selectedDifficulty;
                    }
                });

                setAssignments(filteredAssignments)
            })
    }, [assignments, selectedDifficulty])

    const handleDelete = (_id, email) => {

        if (user?.email === email) {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        fetch(`https://server-site-assignment-eight.vercel.app/assignment/${_id}`, {
                            method: "DELETE"
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.deletedCount > 0) {


                                    // const addedUserCarts = assignments.filter(assignment => crt.email == user.email);
                                    const remaining = assignments.filter(assignment => assignment._id !== _id);
                                    setAssignments(remaining);
                                    swal("Poof! Your imaginary card has been deleted!", {
                                        icon: "success",
                                    });
                                    if (remaining.length == 0) {
                                        window.location.reload();
                                        // navigate("/myCart");
                                    }

                                }
                            })

                    } else {
                        swal("Your imaginary card is safe!");
                    }
                });
        }
        else {
            if (user?.email) {
                toast.warn('👾You Are Not Able To delete It !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else { // Make sure 'location' is defined appropriately
                navigate('/login', { state: location.pathname });
            }
        }
    }
    const handleUpdate = (_id, email) => {
        if (user?.email === email) {
            navigate(`/update/${_id}`)
        }
        else {
            if (user?.email) {
                toast.warn('👾You Are Not Able To update It !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else { // Make sure 'location' is defined appropriately
                navigate('/login', { state: location.pathname });
            }
        }
    }
    return (
        <div className=' mx-auto p-4'>
            <div className='mb-5 relative'>
                <img src="https://img.freepik.com/free-vector/tasks-schedule-concept-with-people-making-notes_107791-15370.jpg?w=1380&t=st=1699126173~exp=1699126773~hmac=29b4d682336180b1fd125099f01a52888659860c28b40e58c0efd2dadb3b9c6b" alt="" className='w-full h-44 rounded-lg' />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start p-2">
                    <p className="text-white text-2xl">All Assignment</p>
                </div>
            </div>
            <div className='py-2 my-3'>
                <label htmlFor="difficultySelect" className='text-3xl font-bold'>Select Difficulty:</label>
                <select
                    id="difficultySelect"
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    value={selectedDifficulty} className='rounded-lg px-3 py-2 m-2'>
                    <option value="All">All</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    assignments.map((assignment, index) => <Assignment key={assignment._id} assignment={assignment} handleDelete={handleDelete} handleUpdate={handleUpdate}></Assignment>)
                }
            </div>
        </div>
    );
};

export default Assignments;
