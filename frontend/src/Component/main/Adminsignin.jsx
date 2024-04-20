import React from 'react'
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const Adminsignin = () => {
  const navigate = useNavigate();

    const AdminsigninForm = useFormik({
        initialValues: {
        
          email: '',
          password: ''
         
        },
        // Step4 : what happens when form is submitted
        onSubmit : async(values , action) => {
          console.log(values);
          const res = await fetch ("http://localhost:3000/Admin/authenticate",{
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
            navigate("/admin/ManageUser")

            const data = await res.json();
            console.log(data);
            sessionStorage.setItem("Admin",JSON.stringify(data));

          } else {
            enqueueSnackbar('User not login', {variant: 'error'})
          }
        } 
    
        // Step6 : Validation Schema
        // validationSchema: LoginSchema
      })

  return (
    <div>
  {/* Login 1 - Bootstrap Brain Component */}
  <div className="bg-light py-3 py-md-5">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
          <div className="bg-white p-4 p-md-5 rounded shadow-sm">
            <div className="row">
              <div className="col-12">
                <div className="text-center mb-5">
                  <a href="#!">
                    <img
                      src="https://static8.depositphotos.com/1323882/952/i/450/depositphotos_9524783-stock-illustration-do-it-yourself-concept.jpg"
                      alt="BootstrapBrain Logo"
                      width={185}
                      height={90}
                    />
                  </a>
                </div>
              </div>
            </div>
            <form action="#!" onSubmit={AdminsigninForm.handleSubmit}>
              <div className="row gy-3 gy-md-4 overflow-hidden">
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </span>
                    <input
                      type="email" name="email" id="email"
                      value={AdminsigninForm.values.email}
                      onChange={AdminsigninForm.handleChange}
                      placeholder="Username"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="password" className="form-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-key"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                    <input
                     type="password" name="password" id="password"
                     value={AdminsigninForm.values.password}
                     onChange={AdminsigninForm.handleChange}
                     placeholder="Password" 
                     className="form-control"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg" type="submit">
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-12">
                <hr className="mt-5 mb-4 border-secondary-subtle" />
                <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center">
                  <a href="#!" className="link-secondary text-decoration-none">
                    Create new account
                  </a>
                  <a href="#!" className="link-secondary text-decoration-none">
                    Forgot password
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Adminsignin