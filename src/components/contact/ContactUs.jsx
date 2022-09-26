import React from 'react';

const ContactUs = () => {
  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <div className='forms'>
        <div className="form__group">
          <input type="text" className="form__input" id="name" placeholder="Full name" required="" />
          <label for="name" className="form__label">Full Name</label>
        </div>
        <div className="form__group">
          <input type="text" className="form__input" id="name" placeholder="Email" required="" />
          <label for="name" className="form__label">Email</label>
        </div>
      </div>
      <div className="form__group">
          <input type="text" className="form__input1" id="name" placeholder="Contact Number" required="" />
          <label for="name" className="form__label">Contact Number</label>
      </div>
      <div className="form__group">
          <input type="text" className="form__input1" id="name" placeholder="Message" required="" />
          <label for="name" className="form__label">Message</label>
      </div>
      <button className='btn_submit'>Submit</button>
    </div>
  )
}

export default ContactUs;