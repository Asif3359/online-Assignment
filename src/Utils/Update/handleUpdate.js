import axios from "axios";
import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const handleDelete = (_id, email) => {

    const {user}=useContext(AuthContext);
    const navigate= useNavigate();

    if (user?.email === email) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    axios.delete(`http://localhost:5000/assignment/${_id}`,{withCredentials:true})
                        .then(res=> {
                            const data=res.data;
                            console.log(data);
                            if (data.deletedCount > 0) {


                                // const addedUserCarts = assignments.filter(assignment => crt.email == user.email);
                                const remaining = assignments.filter(assignment => assignment._id !== _id);
                                setAssignments(remaining);
                                swal("Poof! Your imaginary card has been deleted!", {
                                    icon: "success",
                                });
                                if (remaining.length == 0) {
                                    window.location.reload();
                                    // navigate("/myCart");
                                }

                            }
                        })

                } else {
                    swal("Your imaginary card is safe!");
                }
            });
    }
    else {
        if (user?.email) {
            toast.warn('👾You Are Not Able To delete It !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else { // Make sure 'location' is defined appropriately
            navigate('/login', { state: location.pathname });
        }
    }
}

export default handleDelete;