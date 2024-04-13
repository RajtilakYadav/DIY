import React from 'react'
import './Feedback.css'

const Feedback = () => {
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
            <div className="contact_form_inner">
              <div className="contact_field">
                <h3>Feedback Form</h3>
                <p>
                  Feel Free to give your Feedback
                </p>
                <input
                  type="text"
                  className="form-control form-group"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="form-control form-group p-3 "
                  placeholder="Email"
                />
                <textarea
                  className="form-control form-group"
                  placeholder="Feedback"
                  defaultValue={""}
                />
                <button className="contact_form_submit">Send</button>
              </div>
            </div>
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