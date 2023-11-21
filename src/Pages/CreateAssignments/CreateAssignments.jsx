import axios from 'axios';
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CreateAssignments = () => {

    const {user}=useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const from = e.target;
        const title = from.title.value;
        const marks = from.marks.value;
        const thumbnailURL = from.thumbnailURL.value;
        const difficulty = from.difficulty.value;
        const dueDate = from.dueDate.value;
        const description = from.description.value;
        const email=user.email;
        const displayName= user.displayName;
        const photoURL=user.photoURL;

        const assignment = {
            title, marks, thumbnailURL, difficulty, dueDate, description,email,photoURL,displayName
        }
        console.log(assignment);

        axios.post("https://server-site-assignment-eight.vercel.app/assignment", assignment,{withCredentials:true})
            .then((response) => {
                // Handle the successful response here
                console.log('POST request successful', response.data);
                navigate("/assignments");
                from.reset();

            })
            .catch((error) => {
                // Handle any errors that occurred during the POST request
                console.error('Error making POST request', error);
            });
    }


    return (
        <div className=" mx-auto p-4">
            <div className='mb-5 relative'>
                <img src="https://img.freepik.com/free-vector/tasks-schedule-concept-with-people-making-notes_107791-15370.jpg?w=1380&t=st=1699126173~exp=1699126773~hmac=29b4d682336180b1fd125099f01a52888659860c28b40e58c0efd2dadb3b9c6b" alt="" className='w-full h-44 rounded-lg' />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start p-2">
                    <p className="text-white text-2xl">Create Your  Assignment</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-2 '>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-left">Title</label>
                        <input type="text" id="title" placeholder='Title ' name="title" required className="w-full px-4 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="marks" className="block text-left">Marks</label>
                        <input type="number" id="marks" name="marks" required className="w-full px-4 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="thumbnailUrl" className="block text-left">Thumbnail Image URL</label>
                        <input type="text" id="thumbnailUrl" placeholder='url:' name="thumbnailURL" required className="w-full px-4 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-left">Difficulty Level</label>
                        <select name="difficulty" required className="w-full px-4 py-2 border rounded">
                            <option value="">Select Level</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor='dueDate' className="block text-left">Due dueDate</label>
                        <input type='date' name='dueDate' id='dueDate' required className="w-full px-4 py-2 border rounded" />
                    </div>
                    <div className="mb-4 row-span-2">
                        <label htmlFor="description" className="block text-left">description</label>
                        <textarea id="description" name="description" placeholder='Short description' rows="5" required className="w-full px-4 py-2 border h-fit rounded"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default CreateAssignments;