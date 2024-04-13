import React from 'react'
import './Feedback.css'

const Feedback = () => {
  return (
    <div id="form-main">
  <div id="form-div">
    <form className="form" id="form1">
      <h1 className="heading">Feedback Form</h1>
      <div className="head2">Please fill all the texts in the fields</div>
      <p className="name">
        <input
          name="name"
          type="text"
          className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
          placeholder="Your Full Name"
          id="name"
        />
      </p>
      <p className="email">
        <input
          name="email"
          type="text"
          className="validate[required,custom[email]] feedback-input"
          id="email"
          placeholder="Valid Email Address"
        />
      </p>
      <p className="message">
        <textarea
          name="text"
          className="validate[required,length[6,300]] feedback-input"
          id="message"
          placeholder="Your Feedback to Us"
          defaultValue={""}
        />
      </p>
      
      <div className="submit">
        <input type="submit" defaultValue="SEND" id="button-blue" />
        <div className="ease" />
      </div>
    </form>
  </div>
</div>

  
  )
}

export default Feedback