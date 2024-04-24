import React from 'react'
import './ContactUs.css'
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';

const ContactUs = () => {

  const ContactForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ""
    },
    // Step4 : what happens when form is submitted
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch("http://localhost:3000/contact/add", {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()

      if (res.status === 200) {
        enqueueSnackbar('Contact Added Successfully', { variant: 'success' })

      } else {
        enqueueSnackbar('Contact not added', { variant: 'error' })
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
                <form action='' onSubmit={ContactForm.handleSubmit}>
                <div className="contact_form_inner">
                  <div className="contact_field">
                    <h3>Contact Us</h3>
                    <p>
                      Feel Free to contact us any time. We will get back to you
                      as soon as we can!.
                    </p>
                    <input
                      type="text"
                      id='name'
                      value={ContactForm.values.name}
                      onChange={ContactForm.handleChange}
                      className="form-control form-group"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      id='email'
                      value={ContactForm.values.email}
                      onChange={ContactForm.handleChange}
                      className="form-control form-group p-3 "
                      placeholder="Email"
                    />
                    <textarea
                      className="form-control form-group"
                      id='message'
                      value={ContactForm.values.message}
                      onChange={ContactForm.handleChange}
                      placeholder="Message"
                      defaultValue={""}
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
              <h4>Contact Info</h4>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-headset" />
                <h6>+91 8679 054294</h6>
              </div>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-envelope-open-text" />
                <h6>info@DiyInnovates.com</h6>
              </div>
              <div className="d-flex info_single align-items-center">
                <i className="fas fa-map-marked-alt" />
                <h6>
                  Sector 49 , Indira Nagar, Lucknow, India
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="map_sec">
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="map_inner">
            <h4>Find Us on Google Map</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quo beatae quasi assumenda, expedita aliquam minima tenetur
              maiores neque incidunt repellat aut voluptas hic dolorem sequi ab
              porro, quia error.
            </p>
            <div className="map_bind">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d430331.75605813664!2d80.84256016934229!3d26.81287370447149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1712514048283!5m2!1sen!2sin" 
                width="100%"
                height={450}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
              />
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

export default ContactUs