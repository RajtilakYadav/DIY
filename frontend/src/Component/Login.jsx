import React from 'react'
import  './Login.css'
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';

const Login =()=> {

  const loginForm = useFormik({
    initialValues: {
    
      email: '',
      password: ''
     
    },
    // Step4 : what happens when form is submitted
    onSubmit : async(values , action) => {
      console.log(values);
      const res = await fetch ("http://localhost:3000/user/authenticate",{
        method:'POST',
        body: JSON.stringify(values),
        headers:{
            'Content-Type':'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()

      if (res.status === 200){
        enqueueSnackbar('User Login Successfully', {variant: 'success'})
      } else {
        enqueueSnackbar('User not login', {variant: 'error'})
      }
    } 

    // Step6 : Validation Schema
    // validationSchema: LoginSchema
  })

  return (
    <div className='back'><div className="wrapper">
    <div className="logo">
      <img
        src="https://live.staticflickr.com/65535/49952333341_f757f8f1e1_b.jpg"
        alt=""
      />
    </div>
    <div className="text-center mt-4 name">DIY Inovate</div>
    <form className="p-3 mt-3" onSubmit={loginForm.handleSubmit}>
      <div className="form-field d-flex align-items-center">
        <span className="far fa-user" />
        <input type="email" name="email" id="email"
        value={loginForm.values.email}
        onChange={loginForm.handleChange}
        placeholder="Username" />
      </div>
      <div className="form-field d-flex align-items-center">
        <span className="fas fa-key" />
        <input type="password" name="password" id="password"
        value={loginForm.values.password}
        onChange={loginForm.handleChange}
        placeholder="Password" />
      </div>
      <button type='submit' className="btn mt-3">Login</button>
    </form>
    <div className="text-center fs-6">
      <a href="#">Forget password?</a> or <a href="#">Sign up</a>
    </div>
  </div></div>
  )
}

export default Login