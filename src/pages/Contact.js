import React, { useState } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz_pvTAFbow9uZJwFZCchoAIQyb6BjxQhO8x89s0D80c8oMG2OvBJDQickNKci8Ji8-/exec"; 

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
            <span style={{color: '#D4AF37', fontWeight: 'bold'}}>GET IN TOUCH WITH US</span>
            <h2 style={{marginTop: '5px'}}>LEAVE A MESSAGE</h2>
            <form className="grid-2" onSubmit={handleSubmit}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Email Address" required />
              <input type="text" name="user_phone" placeholder="Phone Number" required />
              <input type="text" name="user_subject" placeholder="Subject" required />
              <textarea name="user_message" placeholder="Write message" className="full-width" required></textarea>
              <button type="submit" className="send-btn" disabled={loading}>
                {loading ? "SENDING..." : "SEND A MESSAGE"}
              </button>
            </form>
          </div>
          <div className="contact-info-card">
            <h3>Office Address</h3>
            <p>📍 CDGI Campus, Khandwa Road, Indore (452020)</p>
            <p>📞 +91 8860082205</p>
            <p>✉️ veritasmootingsociety@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;