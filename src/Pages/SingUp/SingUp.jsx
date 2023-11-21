import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img1 from "../../assets/images/login/12085707_20944201.jpg"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Providers/AuthProviders';
const SingUp = () => {

    const [registerSuccessMessage, setRegisterSuccessMessage] = useState(null);
    const [registerErrorMessage, setRegisterErrorMessage] = useState(null);

    const { createUser, socialLogIn, profile } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault()
        const Name = e.target.name.value;
        const Email = e.target.email.value;
        const Photo = e.target.photo.value;
        const Password = e.target.password.value;
        console.log(Name, Email, Photo, Password);
        if (Password.length < 6) {
            setRegisterErrorMessage("password is less than 6 characters")
            return;
        }
        // if(/^(?=.*[a-z])/.test(Password)){
        //     return setRegisterErrorMessage("don't have a capital letter")
        // }
        if (!/[A-Z]/.test(Password)) {
            return setRegisterErrorMessage("don't have a capital letter")
        }
        if (!/[@#$%^&!]/.test(Password)) {
            return setRegisterErrorMessage(" don't have a special character")
        }
        createUser(Email, Password)
            .then(result => {
                profile(Name, Photo)
                    .then(result => {
                        const user = result.user;
                    })
                    .catch(error => {
                        const errorCode = error.code;
                        console.log(errorCode);
                    })
                const user = result.user;
                console.log(user);
                const ourUsr = {
                    email: user.email,
                    lastLogAt: user.metadata?.lastSignInTime,
                    displayName: Name,
                    photoURL: Photo
                }
                console.log(ourUsr);
                fetch('https://server-site-assignment-eight.vercel.app/jwt', {
                    method: 'POST',
                    credentials:"include",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(ourUsr)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        console.log(data.acknowledged);
                        navigate(location?.state ? location.state : "/");
                        
                    })
                setRegisterSuccessMessage("User Successfully register ");
                navigate(location?.state ? location.state : "/")
                toast.success('User Successfully register', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            })
            .catch(error => {
                setRegisterErrorMessage(error.message);
                toast.error('User could not register successfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })

    }
    const socialLoginWith = (googleLogIn) => {
        setRegisterSuccessMessage("");
        setRegisterErrorMessage("");

        googleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                const ourUsr = {
                    email: user.email,
                    lastLogAt: user.metadata?.lastSignInTime,
                    displayName: user.displayName,
                }
                fetch('https://server-site-assignment-eight.vercel.app/jwt', {
                    method: 'POST',
                    credentials:"include",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(ourUsr)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        console.log(data.acknowledged);
                        navigate(location?.state ? location.state : "/");
                        
                    })
                setRegisterSuccessMessage("User Successfully login ");
                navigate(location?.state ? location.state : "/");
                toast.success('User Successfully login', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => {
                console.log(error.message);
                setRegisterErrorMessage(error.message);
                toast.error('User could not login successfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1 hidden lg:flex justify-center items-center'>
                <img src={img1} alt="" className='w-3/4 rounded-3xl' />
            </div>
            <div className='flex-1'>
                <section className="">
                    <div className="flex flex-col items-center justify-center px-2 py-4 mx-auto my-5 ">
                        <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                            <div className="p-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                                    Register
                                </h1>
                                <form onSubmit={handleRegister} className="space-y-2 md:space-y-3 mt-5 mb-3" action="#">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium ">Your name</label>
                                        <input type="text" name="name" id="name" className=" border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="full name" required />
                                    </div>
                                    <div>
                                        <label htmlFor="photo" className="block mb-2 text-sm font-medium ">Your photo url</label>
                                        <input type="text" name="photo" id="photo" className=" border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                                        <input type="email" name="email" id="email" className=" border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium ">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className=" border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="please select this" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300"> Accept Our Terms And Condition</label>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="submit" value="Register" className="w-full btn btn-sm " />
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account yet? <Link to="/login" className="font-medium text-primary-600 hover:underline text-yellow-500">login</Link>
                                    </p>
                                </form>
                                <div className='text-center flex flex-col space-y-2'>
                                    <h1 className=''>Login WIth</h1>
                                    <div className='border'></div>
                                    <div className='flex justify-start item-center w-full'>
                                        <button onClick={() => socialLoginWith(socialLogIn)} className='btn btn-sm w-1/2 '>Google</button>
                                    </div>
                                </div>
                                {
                                    registerSuccessMessage
                                    &&
                                    <div className='py-1'>
                                        <p className='text-green-500'>{registerSuccessMessage}</p>
                                    </div>
                                }
                                {
                                    registerErrorMessage
                                    &&
                                    <div>
                                        <p className='text-red-500'>{registerErrorMessage}</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SingUp;