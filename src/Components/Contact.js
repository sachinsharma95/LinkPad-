import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id = "#c">
      <h1 className="primary-heading1">Search Job and Connect with Alumini </h1>
      {/* <h1 className="primary-heading">your Alumini Help you to make your carriers</h1> */}
      <div className="contact-form-container">
        <input type="text" placeholder="Ex- Software Engineer " />
        <button className="secondary-button">Search</button>
      </div>
    </div>
  );
};

export default Contact;
