import React, { useState } from 'react'
import './Feedback.css'
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import StarRatings from 'react-star-ratings';


const Feedback = () => {
  const [rating, setRating] = useState(0);

  const feedbackForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: "",
      rating:""
    },
    // Step4 : what happens when form is submitted
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch("http://localhost:3000/feedback/add", {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()

      if (res.status === 200) {
        enqueueSnackbar('Feedback Added Successfully', { variant: 'success' })

      } else {
        enqueueSnackbar('Feedback not added', { variant: 'error' })
      }
    }

    // Step6 : Validation Schema
    // validationSchema: LoginSchema
  })
  return (
    <div>
      <>
        <section className="contact_us">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="contact_inner">
                  <div className="row">
                    <div className="col-md-10">
                      <form action="" onSubmit={feedbackForm.handleSubmit}>
                        <div className="contact_form_inner">
                          <div className="contact_field">
                            <h3>Feedback Form</h3>
                            <p>
                              Feel Free to give your Feedback
                            </p>
                            <input
                              type="text"
                              id='name'
                              value={feedbackForm.values.name}
                              onChange={feedbackForm.handleChange}
                              className="form-control form-group"
                              placeholder="Name"
                            />
                            <input
                              type="text"
                              id='email'
                              value={feedbackForm.values.email}
                              onChange={feedbackForm.handleChange}
                              className="form-control form-group p-3 "
                              placeholder="Email"
                            />
                            <textarea
                              className="form-control form-group"
                              id='message'
                              value={feedbackForm.values.message}
                              onChange={feedbackForm.handleChange}
                              placeholder="Feedback"
                              defaultValue={""}
                            />
                            <StarRatings
                              rating={rating}
                              starRatedColor="yellow"
                              changeRating={setRating}
                              numberOfStars={5}
                             
                             
                              
                            />
                            <button type='submit' className="contact_form_submit">Send</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-2">
                      <div className="right_conatct_social_icon d-flex align-items-end">
                        <div className="socil_item_inner d-flex">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-square" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact_info_sec">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </>

    </div>

  )
}

export default Feedback