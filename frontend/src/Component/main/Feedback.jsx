import React, { useState } from 'react'
import './Feedback.css'
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
// import ReactStars from "react-rating-stars-component"

// import StarRatingComponent from 'react-star-rating-component';




const Feedback = () => {
  const [rating, setRating] = useState(0);

  const feedbackForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: "",
      rating: ""
    },
    // Step4 : what happens when form is submitted
    onSubmit: async (values, action) => {
      console.log(values);
      values.rating = rating
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
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <div>
        <div className="contact-form-wrapper d-flex justify-content-center">
          <form action="#" className="contact-form" onSubmit={feedbackForm.handleSubmit}>
            <h5 className="title">Feedback</h5>
            <p className="description">
              Feel free to share your valuable feedback

            </p>
            <div>
              <input
                type="text"
                className="form-control rounded border-white mb-3 form-input"
                id="name"
                value={feedbackForm.values.name}
                onChange={feedbackForm.handleChange}
                placeholder="Name"
                required=""
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control rounded border-white mb-3 form-input"
                id="email"
                value={feedbackForm.values.email}
                onChange={feedbackForm.handleChange}
                placeholder="Email"
                required=""
              />
            </div>
            <div>
              <textarea
                id="message"
                className="form-control rounded border-white mb-3 form-text-area"
                rows={5}
                cols={30}
                value={feedbackForm.values.message}
                onChange={feedbackForm.handleChange}
                placeholder="Message"
                required=""
                defaultValue={""}
              />
              <div>
                {/* <ReactStars
                  rating={rating}
                  onChange={setRating}
                  size={30}
                  activeColor="#ffd700"
                /> */}
              </div>

            </div>
            <div className="submit-button-wrapper mt-3">
              <input type="submit" defaultValue="Send" />
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default Feedback