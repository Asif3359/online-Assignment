import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import axios from 'axios';

const TakeAssignment = () => {
    // const assignment = useLoaderData();

    const [assignment, setAssignment] = useState({});

    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const { id } = useParams();
    const { title, marks, thumbnailURL, difficulty, dueDate, description, email } = assignment;
    const submitEmail = user.email;
    const userSubmit = user.displayName;
    const pending = true;
    const examineeMarks = "";
    const feedBack = "";

    useEffect(() => {
        axios.get(`https://server-site-assignment-eight.vercel.app/assignment/${id}`, { withCredentials: true })
            .then(res => {
                const data = res.data;
                console.log(data);
                setAssignment(data);
            })
    }, [])
    const handleSubmitAssignment = (e) => {

        e.preventDefault();
        const from = e.target;
        const pdfLink = from.pdfLink.value;
        const notes = from.notes.value;

        const submitUser = {
            pdfLink, notes, title, marks, examineeMarks, feedBack, thumbnailURL, difficulty, dueDate, description, email, submitEmail, userSubmit, pending,
        }

        console.log(submitUser);
        axios.post("https://server-site-assignment-eight.vercel.app/submitAssignment", submitUser, { withCredentials: true })
            .then((response) => {
                // Handle the successful response here
                console.log('POST request successful', response.data);
                toast.success('🦄 Wow so easy!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                from.reset();
                navigate("/assignments");
            })
            .catch((error) => {
                // Handle any errors that occurred during the POST request
                console.error('Error making POST request', error);
            });

    }


    return (
        <div className='p-4 space-y-3'>
            <div>
                <h1 className='text-3xl font-bold'>{assignment.title}</h1>
                <p>Marks: {assignment.marks}</p>
                <p>Submission Date: {assignment.dueDate}</p>
            </div>
            <div className=" flex flex-col lg:flex-row justify-between items-center gap-4 ">
                <div className='flex-1'>
                    <img src={assignment.thumbnailURL} alt="" className='rounded-xl' />
                </div>
                <div className='flex-1'>
                    <div className=" mx-auto p-6 rounded-lg ">
                        <h2 className="text-2xl font-semibold mb-4">Assignment Submission Form</h2>
                        <form onSubmit={handleSubmitAssignment}>
                            <div className="mb-4">
                                <label htmlFor="pdfLink" className="block text-sm font-medium ">
                                    PDF Link:
                                </label>
                                <p className='text-sm'>To create a link you can use <a href='https://updf.com/' target="_blank" className='text-blue-500'>UPDF</a></p>
                                <input
                                    type="text"
                                    id="pdfLink"
                                    name="pdfLink"
                                    className="w-full border rounded-lg py-2 px-3 mt-2 focus:outline-none focus:ring focus:border-blue-300"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="notes" className="block text-sm font-medium ">
                                    Notes:
                                </label>
                                <textarea
                                    id="notes"
                                    name='notes'
                                    className="w-full border rounded-lg py-2 px-3 mt-2 focus:outline-none focus:ring focus:border-blue-300"
                                    rows="4"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Submit Assignment
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default TakeAssignment;
// onChange={(e) => setPdfLink(e.target.value)}
// onChange={(e) => setNotes(e.target.value)}
// onSubmit = { handleSubmit }