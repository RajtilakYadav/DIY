import React from 'react'
import * as Yup from "yup"
import {useFormik} from "formik"
import { enqueueSnackbar } from 'notistack'


const AdminSignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Required'),
  password: Yup.string().required('required').min(8)

})


const Adminsignup = () => {

  const AdminsignupForm = useFormik({
    initialValues: {
    name : '',
      email: '',
      password: '',
      cpassword: ""
    },
    // Step4 : what happens when form is submitted
    onSubmit : async(values , action) => {
      console.log(values);
      const res = await fetch ("http://localhost:3000/Admin/add",{
        method:'POST',
        body: JSON.stringify(values),
        headers:{
            'Content-Type':'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()

      if (res.status === 200){
        enqueueSnackbar('Admin Added Successfully', {variant: 'success'})
      } else {
        enqueueSnackbar('Admin not added', {variant: 'error'})
      }
    } 

    // Step6 : Validation Schema
    // validationSchema: LoginSchema
  })
  return (
    <div>
  {/* Login 13 - Bootstrap Brain Component */}
  <section className="bg-light py-3 py-md-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <div className="card border border-light-subtle rounded-3 shadow-sm">
            <div className="card-body p-3 p-md-4 p-xl-5">
              <div className="text-center mb-3">
                <a href="#!">
                  <img
                    src="https://static8.depositphotos.com/1323882/952/i/450/depositphotos_9524783-stock-illustration-do-it-yourself-concept.jpg"
                    alt="BootstrapBrain Logo"
                    width={175}
                    height={80}
                  />
                </a>
              </div>
              <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                Sign up to your account
              </h2>
              <form action="#!" onSubmit={AdminsignupForm.handleSubmit}>
                <div className="row gy-2 overflow-hidden">
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        id="name"
                        value={AdminsignupForm.values.name}
                        onChange={AdminsignupForm.handleChange}
                        className="form-control"
                      />
                      <label htmlFor="email" className="form-label">
                        Username
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input
                       type="email"
                       id="email"
                       value={AdminsignupForm.values.email}
                       onChange={AdminsignupForm.handleChange}
                        className="form-control"
                      />
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        id="password"
                        value={AdminsignupForm.values.password}
                        onChange={AdminsignupForm.handleChange}
                        className="form-control"
                      />
                      <label htmlFor="password" className="form-label">
                        Create Password
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        id="cpassword"
                        value={AdminsignupForm.values.cpassword}
                        onChange={AdminsignupForm.handleChange}
                        className="form-control"
                      />
                      <label htmlFor="password" className="form-label">
                        Repeat Password
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex gap-2 justify-content-between">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          name="rememberMe"
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label text-secondary"
                          htmlFor="rememberMe"
                        >
                          Keep me signup in
                        </label>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-grid my-3">
                      <button className="btn btn-primary btn-lg" type="submit">
                        Sign up
                      </button>
                    </div>
                  </div>
                  <div className="col-12">
                    <p className="m-0 text-secondary text-center">
                      Don't have an account?{" "}
                      <a
                        href="#!"
                        className="link-primary text-decoration-none"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Adminsignup