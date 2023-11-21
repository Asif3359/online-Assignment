import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import MyAssignment from './MyAssignment';
import axios from 'axios';
import { useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import swal from 'sweetalert';

const MyAssignments = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [myAssignments, setMyAssignment] = useState([]);

    useEffect(() => {
        axios.get('https://server-site-assignment-eight.vercel.app/assignment', { withCredentials: true })
            .then(res => {
                const data = res.data;
                const mySubmitted = data.filter(mySubmit => mySubmit.email == user.email)
                setMyAssignment(mySubmitted);
            });

    }, []);
    // console.log(myAssignments);
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

                        axios.delete(`https://server-site-assignment-eight.vercel.app/assignment/${_id}`,{withCredentials:true})
                            .then(res => {
                                const data = res.data
                                console.log(data);
                                if (data.deletedCount > 0) {


                                    // const addedUserCarts = assignments.filter(assignment => crt.email == user.email);
                                    const remaining = myAssignments.filter(assignment => assignment._id !== _id);
                                    setMyAssignment(remaining);
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
                    <p className="text-white text-2xl">My Assignment</p>
                </div>
            </div>
            {/* <div>{myAssignments?.length}</div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    myAssignments.map((myAssignment, index) => <MyAssignment key={index} myAssignment={myAssignment} handleDelete={handleDelete} handleUpdate={handleUpdate}></MyAssignment>)
                }
            </div>
        </div>
    );
};

export default MyAssignments;