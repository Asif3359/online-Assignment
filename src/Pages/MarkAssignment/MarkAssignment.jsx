import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const MarkAssignment = () => {
    // loader:({params})=>fetch(`http://localhost:5000/submitAssignment/${params.id}`)

    const [submitAssignment, setSubmitAssignment] = useState({});

    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        axios.get(`https://server-site-assignment-eight.vercel.app/submitAssignment/${id}`, { withCredentials: true })
            .then(res => {
                const data = res.data;
                console.log(data);
                setSubmitAssignment(data);
            })
    }, [])

    const handleGiveMark = (e) => {
        e.preventDefault();

        const from = e.target;
        const pending = submitAssignment.pending = false;
        const examineeMarks = from.examineeMarks.value;
        const feedBack = from.feedBack.value;

        const updateSubmitAssignment = {
            title: submitAssignment.title,
            marks: submitAssignment.marks,
            thumbnailURL: submitAssignment.thumbnailURL,
            difficulty: submitAssignment.difficulty,
            dueDate: submitAssignment.dueDate,
            description: submitAssignment.description,
            email: submitAssignment.email,
            pdfLink: submitAssignment.pdfLink,
            notes: submitAssignment.notes,
            examineeMarks: examineeMarks,
            submitEmail: submitAssignment.submitEmail,
            userSubmit: submitAssignment.userSubmit,
            pending: pending,
            feedBack:feedBack
        }
        console.log(updateSubmitAssignment);

        fetch(`https://server-site-assignment-eight.vercel.app/submitAssignment/${submitAssignment._id}`, {
            method: 'PUT',
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateSubmitAssignment)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Congratulation Marked  successfully!', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate("/");

            })

    }


    return (
        <div className=" p-4  rounded-md">
            <div className='flex justify-start  items-center gap-2'>
                <h1 className="text-2xl font-semibold mb-4"> {submitAssignment.title}</h1>
            </div>
            {/* <a href={submitAssignment.pdfLink}>View It </a> */}
            <div className='flex flex-col lg:flex-row justify-between items-start gap-5'>
                <div className=" rounded-lg shadow-md overflow-hidden flex-1 w-full lg:w-3/4 ">
                    <iframe
                        title="PDF Viewer"
                        className="  overscroll-y-auto h-[70vh] w-full"
                        // src="https://turquoise-bettina-89.tiiny.site"
                        src={submitAssignment.pdfLink}
                    >
                    </iframe>

                </div>
                <div className='w-full lg:w-1/4'>
                    <div>
                        <h1>{submitAssignment.userSubmit}</h1>
                        <h1>Marks:{submitAssignment.marks}</h1>
                    </div>
                    <form onSubmit={handleGiveMark} className='space-y-3' >
                        <div className='space-y-1'>
                            <label htmlFor='mark'> Give marks:</label>
                            <input type="text" name='examineeMarks' id='examineeMarks' placeholder='give examineeMarks' className='border-2 p-2  w-full rounded-xl' />
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor='mark'> Feed Back</label>
                            <textarea type="text" name='feedBack' id='feedBack' placeholder='Feed back' className='border-2 p-2  w-full h-28 rounded-xl ' />
                        </div>
                        <div>
                            <input type="submit" value="Submit" className='btn btn-sm btn-warning w-full' />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default MarkAssignment;