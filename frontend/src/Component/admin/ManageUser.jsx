
import React,{useState, useEffect} from 'react'



// const ManageUser = () => {
//   return (
//     <div>ManageUser</div>

import { enqueueSnackbar } from 'notistack';



const ManageUser = () => {
    const [Data, setData] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:3000/user/getall')
        console.log(res.status)
        
            const data = await res.json();
            console.log(data)
            setData(data)
       
    }
    useEffect(() => {
        fetchUserData()
    }, [])
      
    const deleteUser = async(id) => {
         console.log(id);
         const res = await fetch("http://localhost:3000/user/delete/" +id, {
            method:"DELETE",
         });
         console.log(res.status);
         if(res.status === 200) {
            enqueueSnackbar("user deleted successfully", {variant:"success"})
            fetchUserData();
         }else{
            enqueueSnackbar("somthing went worng", {variant:"warning"})
         }
    }

      const displayUser = () => {
        return(
            <table className='table shadow rounded '>
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                {

                    Data.map((user) => {
                        return(
                            <tbody>
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        <button className='btn btn-danger'onClick={e => deleteUser(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        )
      }
  return (
    <div>
      
   
        <div className="container mt-5">
            <h1 className='text-center fw-bold fs-2 my-4'>Manage User</h1>
            {
                displayUser()
            }
        </div>
    </div>
  )
}

export default ManageUser;