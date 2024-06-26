import React from 'react'
import * as Yup from "yup"
import {useFormik} from "formik"
import { enqueueSnackbar } from 'notistack'
import {useNavigate} from 'react-router-dom'


const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Required'),
  password: Yup.string().required('required').min(8)

})


const Signup = () =>{

  const navigate = useNavigate()

    // Step1 : Formik Initialization
    const signupForm = useFormik({
      initialValues: {
      name : '',
        email: '',
        password: '',
        cpassword: ""
      },
      // Step4 : what happens when form is submitted
      onSubmit : async(values , action) => {
        console.log(values);
        const res = await fetch ("http://localhost:3000/user/add",{
          method:'POST',
          body: JSON.stringify(values),
          headers:{
              'Content-Type':'application/json'
          }
        });
        console.log(res.status)
        action.resetForm()
  
        if (res.status === 200){
          enqueueSnackbar('User Added Successfully', {variant: 'success'})
          navigate("/main/login")
        } else {
          enqueueSnackbar('User not added', {variant: 'error'})
        }
      } 
  
      // Step6 : Validation Schema
      // validationSchema: LoginSchema
    })
  return (
    <div><section className="vh-100" style={{ backgroundColor: "#eee" }}>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{ borderRadius: 25 }}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>
                  <form className="mx-1 mx-md-4" onSubmit={signupForm.handleSubmit}>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example1c">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={signupForm.values.name}
                          onChange={signupForm.handleChange}
                          className="form-control border"
                        />
                       
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example3c">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={signupForm.values.email}
                          onChange={signupForm.handleChange}
                          className="form-control border"
                        />
                       
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4c">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          value={signupForm.values.password}
                          onChange={signupForm.handleChange}
                          className="form-control border"
                        />
                      
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4cd">
                          Repeat your password
                        </label>
                        <input
                          type="password"
                          id="cpassword"
                          value={signupForm.values.cpassword}
                          onChange={signupForm.handleChange}
                          className="form-control border"
                        />
                      
                      </div>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example3c"
                      />
                      <label className="form-check-label" htmlFor="form2Example3">
                        I agree all statements in{" "}
                        <a href="#!">Terms of service</a>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/006/912/004/non_2x/secure-login-and-sign-up-concept-illustration-vector.jpg"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Signup