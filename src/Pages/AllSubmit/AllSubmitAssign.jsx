import React from 'react';
import { Link } from 'react-router-dom';

const AllSubmitAssign = ({submitAssignment}) => {
    
    return (
        <tr>
            <td>
                <h1 className=' font-bold text-xl'>{submitAssignment.title}</h1>
            </td>
            <td>
                <h1>{submitAssignment.userSubmit}</h1>
            </td>
            <td>{submitAssignment.marks}</td>
            <td>{submitAssignment?.pending?<p className='text-orange-500'>Pending</p>:<p className='text-green-500'>Done</p>}</td>
            <th>
                <Link to={`/preView/${submitAssignment._id}`} className="btn btn-ghost btn-xs btn-warning btn-outline">Pre View</Link>
            </th>
        </tr>
    );
};

export default AllSubmitAssign;