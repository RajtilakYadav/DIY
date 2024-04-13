import React from 'react'
import  './Login.css'
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import {useNavigate} from 'react-router-dom'
import useUserContext from '../UserContext';

const Login =()=> {
  
  const navigate = useNavigate()

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
        navigate("/browse")
        setLoggedIn(true)
        const data = await res.json()
        console.log(data)
        sessionStorage.setItem('user',JSON.stringify(data))
      } else {
        enqueueSnackbar('User not login', {variant: 'error'})
      }
    } 

    // Step6 : Validation Schema
    // validationSchema: LoginSchema
  })

  const {setLoggedIn} = useUserContext();


  return (
<div className="login-root">
  <div
    className="box-root flex-flex flex-direction--column"
    style={{ minHeight: "100vh", flexGrow: 1 }}
  >
    <div className="loginbackground box-background--white padding-top--64">
      <div className="loginbackground-gridContainer">
        <div
          className="box-root flex-flex"
          style={{ gridArea: "top / start / 8 / end" }}
        >
          <div
            className="box-root"
            style={{
              backgroundImage:
                "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
              flexGrow: 1
            }}
          ></div>
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "4 / 2 / auto / 5" }}
        >
          <div
            className="box-root box-divider--light-all-2 animationLeftRight tans3s"
            style={{ flexGrow: 1 }}
          />
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "6 / start / auto / 2" }}
        >
          <div
            className="box-root box-background--blue800"
            style={{ flexGrow: 1 }}
          />
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "7 / start / auto / 4" }}
        >
          <div
            className="box-root box-background--blue animationLeftRight"
            style={{ flexGrow: 1 }}
          />
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "8 / 4 / auto / 6" }}
        >
          <div
            className="box-root box-background--gray100 animationLeftRight tans3s"
            style={{ flexGrow: 1 }}
          />
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "2 / 15 / auto / end" }}
        >
          <div
            className="box-root box-background--cyan200 animationRightLeft tans4s"
            style={{ flexGrow: 1 }}
          />
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "3 / 14 / auto / end" }}
        >
          <div
            className="box-root box-background--blue animationRightLeft"
            style={{ flexGrow: 1 }}
          />
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "4 / 17 / auto / 20" }}
        >
          <div
            className="box-root box-background--gray100 animationRightLeft tans4s"
            style={{ flexGrow: 1 }}
          />
        </div>
        <div
          className="box-root flex-flex"
          style={{ gridArea: "5 / 14 / auto / 17" }}
        >
          <div
            className="box-root box-divider--light-all-2 animationRightLeft tans3s"
            style={{ flexGrow: 1 }}
          />
        </div>
      </div>
    </div>
    <div
      className="box-root padding-top--24 flex-flex flex-direction--column"
      style={{ flexGrow: 1, zIndex: 9 }}
    >
      <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
        <h1 className='fw-bold'>
         DIY Innovates
        </h1>
      </div>
      <div className="formbg-outer">
        <div className="formbg">
          <div className="formbg-inner padding-horizontal--48">
            <span className="padding-bottom--15">Sign in to your account</span>
            <form id="stripe-login" onSubmit={loginForm.handleSubmit}>
              <div className="field padding-bottom--24">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id='email' value={loginForm.values.email} onChange={loginForm.handleChange} />
              </div>
              {
                loginForm.touched.email &&
                <span className="text-danger">{loginForm.errors.email}</span>
              }
              <div className="field padding-bottom--24">
                <div className="grid--50-50">
                  <label htmlFor="password">Password</label>
                  <div className="reset-pass">
                    <a href="#">Forgot your password?</a>
                  </div>
                </div>
                <input type="password" name="password" id='password' value={loginForm.values.password} onChange={loginForm.handleChange}/>
              </div>
              {
                loginForm.touched.password &&
                <span className="text-danger">{loginForm.errors.password}</span>
              }
              <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
              
              </div>
              <div className="field padding-bottom--24">
                <input type="submit" name="submit" defaultValue="Continue" />
              </div>
              <div className="field">
                <a className="ssolink" href="#">
                  Other ways to Sign In
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="footer-link padding-top--24">
          <span>
            Don't have an account? <a href="">Sign up</a>
          </span>
          <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
            <span>
              <a href="#">© Stackfindover</a>
            </span>
            <span>
              <a href="#">Contact</a>
            </span>
            <span>
              <a href="#">Privacy &amp; terms</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




  )
}

export default Login