import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo1 from "../../../assets/images/banner/7.jpg"
import { AuthContext } from '../../../Providers/AuthProviders';
import useAuth from '../../../Hooks/useAuth';
import { IoPersonCircle } from "react-icons/io5";
import swal from 'sweetalert';

const NavBar = () => {

    const { user, logOut } = useAuth();
    const { drpDown, handleDropdown } = useContext(AuthContext);
    const [drpDownSmall , handleDropdownSmall]=useState(false)

    const handleLogOut = () => {

        swal({
            title: "Are you sure ? You  want to log out",
            text: "Once logged out, you don access many data From This site!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    logOut()
                        .then(result => {
                            console.log(result);
                        })
                        .catch(error => {
                            console.log(error);
                        })

                } else {
                    swal("You Are Still logged in .");
                }
            });
    }

    // const handleDropdown=(dropdown)=>{
    //     setDropDown(!dropdown)
    // }
    // console.log(drpDownSmall)
    // 


    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/assignments">All Assignments</NavLink></li>
        {
            user?.email ? <>
                <li className="dropdown dropdown-hover">
                    <label tabIndex={0} className="menu-dropdown-toggle" onClick={()=>handleDropdown(drpDown)}>Submitted Assignment</label>
                    <ul tabIndex={0} className={`${drpDown?"":"hidden"}  z-[10] p-2  ml-0 lg:absolute left-0 top-0 lg:left-0 lg:top-5  shadow bg-base-100 rounded-box  lg:w-64 lg:mt-4 space-y-1`}>
                        <li><NavLink to="/allSubmit">All Submitted Assignment</NavLink></li>
                        <li><NavLink to="/submit">Other Submitted Assignment</NavLink></li>
                        <li><NavLink to="/mySubmit">My Submitted Assignment</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/myAss">My Assignments</NavLink></li>
                <li><NavLink to="/create"> create assignments</NavLink></li>
                <li><button onClick={handleLogOut} >logOut</button></li>
            </> : <li><NavLink to="/login">Login</NavLink></li>

        }

    </>
    return (
        <div className="navbar bg-base-100 mt-0 ">
            <div className="navbar-start flex items-center">
                <div className="dropdown">
                    <label tabIndex={0}  onClick={()=>handleDropdownSmall(!drpDownSmall)} className="btn btn-sm btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0}  className={`${drpDownSmall?"":"hidden"} menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 space-y-1`}>
                        {links}
                    </ul>
                </div>
                <Link to="/" className=" normal-case text-xl w-20"><img className='w-20 rounded-full border-2' src={logo1} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <><NavLink to="/profile">
                    {
                        user?.email ? <><img src={user.photoURL} className='w-12 rounded-full btn btn-circle' alt="" /></> : <span className='text-4xl '><IoPersonCircle></IoPersonCircle></span>
                    }
                </NavLink></>
            </div>
        </div>
    );
};

export default NavBar;

// IoPersonCircle