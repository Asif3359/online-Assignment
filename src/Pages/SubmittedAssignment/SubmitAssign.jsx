import React from 'react';
import { Link } from 'react-router-dom';

const SubmitAssign = ({ submitAssignment }) => {

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
            <td>{submitAssignment?.pending?<>Pending</>:<>Done</>}</td>
            <th>
                <Link to={`/mark/${submitAssignment._id}`} className="btn btn-ghost btn-xs btn-warning btn-outline">give mark</Link>
            </th>
        </tr>
    );
};

export default SubmitAssign;