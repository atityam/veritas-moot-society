import React, { useState } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwnwL5T0CTWlaY1wXlDrjluWydZwRZCPeHu5iDQZfHW-op81vDqQWFhzn0_lDj9-hHU/exec"; 

  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/page-header.jpg')`
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    
    const payload = {
      formType: "contact",
      name: form.user_name.value,
      email: form.user_email.value,
      phone: form.user_phone.value,
      subject: form.user_subject.value,
      message: form.user_message.value
    };

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      alert("Message Sent Successfully!");
      form.reset();
    } catch (error) {
      alert("Error sending message.");
    }
    setLoading(false);
  };

  return (
    <div className="fade-in">
      <div className="page-header" style={headerStyle}>
        <h2>Contact Us</h2>
        <div className="breadcrumb">Home / Contact</div>
      </div>
      <div className="container">
        <div className="contact-layout">
          <div className="contact-form">
            <span style={{color: '#D4AF37', fontWeight: 'bold', display: 'block', marginBottom: '10px'}}>GET IN TOUCH WITH US</span>
            <h2 style={{marginTop: '0', marginBottom: '30px'}}>LEAVE A MESSAGE</h2>
            
            <form className="grid-2" onSubmit={handleSubmit}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Email Address" required />
              <input type="text" name="user_phone" placeholder="Phone Number" required />
              <input type="text" name="user_subject" placeholder="Subject" required />
              <textarea name="user_message" placeholder="Write message" rows="5" className="full-width" required></textarea>
              <div className="full-width">
                <button type="submit" className="send-btn" disabled={loading} style={{width: '100%'}}>
                  {loading ? "SENDING..." : "SEND A MESSAGE"}
                </button>
              </div>
            </form>
          </div>
          
          <div className="contact-info-card">
            <h3>Office Address</h3>
            <p>📍 CDGI Campus, Khandwa Road, Indore (452020)</p>
            <p>📠 07314243620 </p>
            <p>✉️ veritasmootingsociety@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;