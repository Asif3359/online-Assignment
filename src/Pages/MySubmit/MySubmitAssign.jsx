import React from 'react';
import { Link } from 'react-router-dom';

const MySubmitAssign = ({ submitAssignment }) => {

    // console.log(submitAssignment);

    return (
        <tr>
            <td>
                <h1 className=' font-bold text-xl'>{submitAssignment.title}</h1>
            </td>
            <td>
                <h1>{submitAssignment.userSubmit}</h1>
            </td>
            <td>{submitAssignment.marks}</td>
            <td>{submitAssignment?.pending ? <p className='text-orange-500'>Pending</p> : <p className='text-green-500 w-20'>Done</p>}</td>
            <th>{submitAssignment.examineeMarks}</th>
            {
                submitAssignment?.feedBack ? <td><button className="btn btn-xs btn-outline btn-accent text-neutral" onClick={() => document.getElementById(`${submitAssignment._id}`).showModal()}>See Feedback</button>
                    <dialog id={`${submitAssignment._id}`} className="modal">
                        <div className="modal-box ">
                            <h3 className="font-bold text-lg">Hey! there</h3>
                            <p className="py-4">{submitAssignment.feedBack}</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </td> : <></>
            }
        </tr>
    );
};

export default MySubmitAssign;


{/* Open the modal using document.getElementById('ID').showModal() method */ }
{/*
 */}