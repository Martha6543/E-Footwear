import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import "./contact.css";
function Contact (){
    return(<Fragment>


        <section div className="wrapper">
  <div className="title">
    <h1>contact us form</h1>
  </div>
  <div className="contact-form">
    <div className="input-fields">
      <input type="text" className="input" placeholder="Name"/>
      <input type="text" className="input" placeholder="Email Address"/>
      <input type="text" className="input" placeholder="Phone"/>
      <input type="text" className="input" placeholder="Subject"/>
    </div>
    <div className="msg">
      <textarea placeholder="Message"></textarea>
      <div className="btn">send</div>
    </div>
  </div>
</section>



    </Fragment>

    )
}
export default Contact;