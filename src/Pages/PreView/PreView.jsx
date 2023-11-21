import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PreView = () => {
    const [submitAssignment, setSubmitAssignment] = useState({});

    const { id } = useParams();


    useEffect(() => {
        axios.get(`https://server-site-assignment-eight.vercel.app/submitAssignment/${id}`, { withCredentials: true })
            .then(res => {
                const data = res.data;
                console.log(data);
                setSubmitAssignment(data);
            })
    }, [])



    return (
        <div className=" p-4  rounded-md">
            <div className='flex justify-start  items-center gap-2'>
                <h1><span className="text-2xl font-bold mb-4">Assignment Tittle: </span> <span className='text-xl font-semibold'>{submitAssignment.title}</span></h1>
            </div>
            {/* <a href={submitAssignment.pdfLink}>View It </a> */}
            <div className='flex flex-col lg:flex-row justify-between items-start gap-5'>
                <div className=" rounded-lg shadow-md overflow-hidden flex-1 w-full lg:w-3/4 ">
                    <iframe
                        title="PDF Viewer"
                        className="  overscroll-y-auto  h-[70vh] w-full"
                        // src="https://turquoise-bettina-89.tiiny.site"
                        src={submitAssignment.pdfLink}
                    >
                    </iframe>

                </div>
                <div className='w-full h-[70vh] lg:w-1/4'>
                    <div>
                        <img src={submitAssignment.thumbnailURL} alt="" className='w-full h-[200px] rounded-lg ' />
                    </div>
                    <div>
                        <h1><span className='font-bold text-lg'>Submitted By :</span> {submitAssignment.userSubmit}</h1>
                        <h1><span className='font-bold text-lg'>Assignment Mark :</span> {submitAssignment.marks}</h1>
                        <h1> <span className='font-bold text-lg'>Last Date :</span> {submitAssignment.dueDate}</h1>
                        <div className='space-y-1'>
                            <p className='text-lg font-bold'>Short description :</p>
                            <p className='h-40 overflow-scroll overflow-x-hidden border rounded-md py-1 px-2'>{submitAssignment.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PreView;