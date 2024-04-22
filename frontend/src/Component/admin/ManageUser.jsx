import React,{useState, useEffect} from 'react'

import React from 'react'

// const ManageUser = () => {
//   return (
//     <div>ManageUser</div>

const ManageUser = () => {
    const [Data, setData] = useState([])

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:3000/user/getall')
        console.log(res.status)
        if (res.status === 200){
            const data = await res.json();
            console.log(data)
            setData(data)
        }
    }
    useEffect(() => {
        fetchUserData()
    }, [])

    const displayUser = () =>{
        return Data.map((user) => (
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        ))
    }
  return (
    <div>
        <header className='bg-danger text-white'>
            <div className="container py-5">
                <h1>Manage User</h1>
            </div>
        </header>

        <div className="container mt-5">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    displayUser()
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ManageUser;