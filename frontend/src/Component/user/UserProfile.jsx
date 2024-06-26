import React, { useEffect, useState } from 'react'

import { enqueueSnackbar } from 'notistack';
import { Formik } from 'formik';


const UserProfile = () => {

    // const {id} = useParams();

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    // const fetchUserData = () => {
    //     fetch("http://localhost:3000/user/getuser/" +id)
    //         .then(res => {
    //             console.log(res.status);
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //             setCurrentUser(data);
    //         })
    //         .catch(err => console.log(err));
    // }

    // useEffect(() => {
    //     fetchUserData();
    // }, [])


    const uploadProfileImage = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append('myfile', file);
        fetch("http://localhost:3000/util/uploadfile", {
            method: 'POST',
            body: fd,
        }).then(res => {
            if (res.status === 200) {
                enqueueSnackbar("Profile Image Uploaded Successfully", { variant: "success" });
                updateProfile({ avatar: file.name });
            }
        });
    }

    const updateProfile = (data) => {
        fetch(`http://localhost:3000/user/update/${currentUser._id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                console.log(res.status);
                return res.json();
            })
            .then(data => {
                console.log(data);
                setCurrentUser(data);
            })
            .catch(err => console.log(err));
    }

    const displayUser = () => {
        if (currentUser === null) {
            return <h1>Loading...</h1>

        } else {

            return <div className="container py-5">
                <div className="row">

                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <div className=" mx-auto rounded bg-white p-10 mt-6">
                                    <img

                                        className="border-rounded rounded-full d-block m-auto"
                                        style={{ height: "120px", width: "120px", borderRadius: "50%" }}
                                        src={
                                            currentUser.avatar &&
                                            `http://localhost:3000/${currentUser.avatar}`} alt="loading.." />
                                    {/* <hr className="mt-2 mb-2" /> */}
                                    <div>
                                        <div className="text-center my-4">
                                            <label
                                                className="btn bg-white hover:bg-slate-200 w-100 mt-3"
                                                htmlFor="upload-image"
                                            >
                                                {" "}
                                                <i className="fas fa-pen"></i>&nbsp;Edit{" "}
                                            </label>
                                            <input
                                                type="file"
                                                hidden
                                                onChange={uploadProfileImage}
                                                id="upload-image"
                                            />
                                        </div>
                                        <p className="text-center text-2xl text-dark">
                                            {/* <span className="mb-2">...</span> */}
                                        </p>
                                        <p className="text-center text-xl text-gray-500 m-4"> <span className="fw-bold">{currentUser.email}</span></p>


                                    </div>
                                </div>
                                <h5 className="my-3">{currentUser.name}</h5>
                                <p className="text-muted mb-1">{currentUser.email}</p>
                                {/* <p className="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
                                <div className="d-flex justify-content-center mb-2">
                                    <button
                                        type="button"
                                        data-mdb-button-init=""
                                        data-mdb-ripple-init=""
                                        className="btn btn-primary"
                                    >
                                        Follow
                                    </button>
                                    <button
                                        type="button"
                                        data-mdb-button-init=""
                                        data-mdb-ripple-init=""
                                        className="btn btn-outline-primary ms-1"
                                    >
                                        Message
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4 mb-lg-0">
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush rounded-3">
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fas fa-globe fa-lg text-warning" />
                                        <p className="mb-0">https://mdbootstrap.com</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i
                                            className="fab fa-github fa-lg"
                                            style={{ color: "#333333" }}
                                        />
                                        <p className="mb-0">mdbootstrap</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i
                                            className="fab fa-twitter fa-lg"
                                            style={{ color: "#55acee" }}
                                        />
                                        <p className="mb-0">@mdbootstrap</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i
                                            className="fab fa-instagram fa-lg"
                                            style={{ color: "#ac2bac" }}
                                        />
                                        <p className="mb-0">mdbootstrap</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i
                                            className="fab fa-facebook-f fa-lg"
                                            style={{ color: "#3b5998" }}
                                        />
                                        <p className="mb-0">mdbootstrap</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Full Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{currentUser.name}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{currentUser.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Phone</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">(097) 234-5678</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Mobile</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">(098) 765-4321</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Address</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="card mb-4 mb-md-0 ">
                                   
                                       <Formik initialValues={currentUser} onSubmit={updateProfile}>
                                                {
                                                    (updateProfile) => (

                                                        <form className='w-50 mx-auto py-3' onSubmit={updateProfile.handleSubmit}>
                                                            <div className="mb-3">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                                    Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="name"
                                                                    value={updateProfile.values.name}
                                                                    onChange={updateProfile.handleChange}

                                                                    aria-describedby="emailHelp"
                                                                />

                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="exampleInputPassword1" className="form-label ">
                                                                    Email
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    id="email"
                                                                    value={updateProfile.values.email}
                                                                    onChange={updateProfile.handleChange}
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="exampleInputPassword1" className="form-label ">
                                                                    Upload Image
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    className="form-control"
                                                                    id="exampleInputPassword1"
                                                                    onChange={uploadProfileImage}
                                                                />
                                                            </div>

                                                            <button type="submit" className="w-100 btn btn-primary">
                                                                Update Profile
                                                            </button>
                                                        </form>
                                                    )
                                                }

                                            </Formik>
                                      



                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        }
    }

    return (
        <div>
            <section style={{ backgroundColor: "#eee" }}>
                {
                    displayUser()
                }
            </section>

        </div>
    )
}

export default UserProfile