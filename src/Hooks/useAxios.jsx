import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "https://server-site-assignment-eight.vercel.app",
    withCredentials: true
});

const useAxios = () => {
    const {  logOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        },error => {
                console.log("Error Tracked", error.response);
                if (error.response.status == 401 || error.response.status == 403) {
                    console.log("Logout");
                    logOut()
                        .then(result => {
                            console.log(result);
                            navigate('/login');
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            }
        )
    }, [])
    return axiosSecure;
};

export default useAxios;