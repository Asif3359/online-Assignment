import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SingUp from '../../Pages/SingUp/SingUp';
import Profile from '../../Pages/Profile/Profile';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Assignments from '../../Pages/Assignments/Assignments';
import MyAssignments from '../../Pages/MyAssignments/MyAssignments';
import CreateAssignments from '../../Pages/CreateAssignments/CreateAssignments';
import ViewAssignment from '../../Pages/ViewAssignment/ViewAssignment';
import UpdateAssignment from '../../Pages/UpdateAssignment/UpdateAssignment';
import TakeAssignment from '../../Pages/TakeAssignment/TakeAssignment';
import SubmittedAssignment from '../../Pages/SubmittedAssignment/SubmittedAssignment';
import MarkAssignment from '../../Pages/MarkAssignment/MarkAssignment';
import MySubmit from '../../Pages/MySubmit/MySubmit';
import AllSubmit from '../../Pages/AllSubmit/AllSubmit';
import PreView from '../../Pages/PreView/PreView';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<div className='flex justify-center items-center h-[80vh]'>
        <div>
            <h3 className='text-center'>Sorry This page not found</h3>
        </div>
      </div>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/profile",
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/singUp",
            element:<SingUp></SingUp>
        },
        {
            path:"/assignments",
            element:<Assignments></Assignments>,
        },
        {
            path:"/myAss",
            element:<PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>,
            // loader: ()=>fetch('http://localhost:5000/assignment')
        },
        {
            path:"/create",
            element:<PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>,
        },
        {
            path:"/view/:id",
            element:<PrivateRoute><ViewAssignment></ViewAssignment></PrivateRoute>,
            // loader:({params})=>fetch(`http://localhost:5000/assignment/${params.id}`)
        },
        {
            path:"/update/:id",
            element:<PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
            // loader:({params})=>fetch(`http://localhost:5000/assignment/${params.id}`)
        },
        {
            path:"/take/:id",
            element:<PrivateRoute><TakeAssignment></TakeAssignment></PrivateRoute>,
            // loader:({params})=>fetch(`http://localhost:5000/assignment/${params.id}`)
        },
        {
            path:"/submit",
            element:<PrivateRoute><SubmittedAssignment></SubmittedAssignment></PrivateRoute>,
        },
        {
            path:"/allSubmit",
            element:<PrivateRoute><AllSubmit></AllSubmit></PrivateRoute>,
        },
        {
            path:"/mark/:id",
            element:<PrivateRoute><MarkAssignment></MarkAssignment></PrivateRoute>,
            
        },
        {
            path:"/preView/:id",
            element:<PrivateRoute><PreView></PreView></PrivateRoute>,
            
        },
        {
            path:"/mySubmit",
            element:<PrivateRoute><MySubmit></MySubmit></PrivateRoute>,
        },
      ]
    },
  ]);

export default router;