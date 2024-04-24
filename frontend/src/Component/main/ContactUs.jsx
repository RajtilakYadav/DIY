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
    <>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossOrigin="anonymous"
    />
    <div>
      <div className="contact-form-wrapper d-flex justify-content-center">
        <form action="#" className="contact-form"onSubmit={ContactForm.handleSubmit}>
          <h5 className="title">Contact us</h5>
          <p className="description">
            Feel free to contact us if you need any assistance, any help or
            another question.
          </p>
          <div>
            <input
              type="text"
              className="form-control rounded border-white mb-3 form-input"
              id="name"
              value={ContactForm.values.name}
                                onChange={ContactForm.handleChange}
              placeholder="Name"
              required=""
            />
          </div>
          <div>
            <input
              type="email"
              className="form-control rounded border-white mb-3 form-input"
              id="email"
              value={ContactForm.values.email}
              onChange={ContactForm.handleChange}
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
              value={ContactForm.values.message}
              onChange={ContactForm.handleChange}
              placeholder="Message"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="submit-button-wrapper">
            <input type="submit" defaultValue="Send" />
          </div>
        </form>
      </div>
    </div>
  
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

   
  )
}

export default ContactUs