import React, { useState } from 'react';

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwnwL5T0CTWlaY1wXlDrjluWydZwRZCPeHu5iDQZfHW-op81vDqQWFhzn0_lDj9-hHU/exec"; 

  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/page-header.jpg')`
  };

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const file = form.id_proof.files[0];
    
    try {
      const fileData = file ? await toBase64(file) : null;
      const payload = {
        formType: "registration",
        college: form.college.value,
        city: form.city.value,
        contact_name: form.contact_name.value,
        email: form.email.value,
        s1_name: form.s1_name.value,
        s2_name: form.s2_name.value,
        res_name: form.res_name.value,
        fileName: file ? file.name : "",
        fileType: file ? file.type : "",
        fileData: fileData
      };

      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      alert("Registration Successful! Data saved to Google Sheets.");
      form.reset();
    } catch (error) {
      alert("Error: " + error.message);
    }
    setLoading(false);
  };

  const TeamMemberFields = ({ role, prefix }) => (
    <div className="member-form-box" style={{ marginBottom: '30px', padding: '25px', border: '1px solid #eee', background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
      <h4 style={{ color: '#800000', marginBottom: '20px', borderBottom: '2px solid #D4AF37', display: 'inline-block' }}>{role} Details</h4>
      <div className="grid-2">
        <input type="text" name={`${prefix}_name`} placeholder="Full Name" required />
        <input type="tel" placeholder="Mobile Number" required />
        <input type="email" placeholder="Email Address" required />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontSize: '14px', color: '#666', marginBottom: '5px' }}>Upload ID Proof:</label>
          <input type="file" name={role === "Researcher" ? "id_proof" : `id_${prefix}`} style={{ border: 'none', background: 'transparent' }} required={role === "Speaker 1"} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="fade-in">
      <div className="page-header" style={headerStyle}>
        <h2>Official Registration</h2>
        <div className="breadcrumb">HOME / REGISTRATION</div>
      </div>
      <div className="container">
        <div className="form-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#800000', marginBottom: '40px' }}>REGISTRATION FORM 2026</h2>
          <form onSubmit={handleSubmit}>
            <h3>I. Institution Details</h3>
            <div className="grid-1" style={{ marginBottom: '20px' }}><input type="text" name="college" placeholder="Name of College/University" required /></div>
            <div className="grid-3">
              <input type="text" name="city" placeholder="City" required />
              <input type="text" name="state" placeholder="State" required />
              <input type="text" placeholder="Zip Code" />
            </div>
            <h3>II. Contact Details</h3>
            <div className="grid-2">
              <input type="text" name="contact_name" placeholder="Name of Contact Person" required />
              <input type="text" placeholder="Position" required />
              <input type="tel" placeholder="Contact Number" required />
              <input type="email" name="email" placeholder="Email Address" required />
            </div>
            <h3>III. Team Details</h3>
            <TeamMemberFields role="Speaker 1" prefix="s1" />
            <TeamMemberFields role="Speaker 2" prefix="s2" />
            <TeamMemberFields role="Researcher" prefix="res" />
            <h3>IV. Security Verification</h3>
            <div className="captcha-box">
                <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#800000' }}>10 + 4 = </span>
                <input type="number" placeholder="Result" required />
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "UPLOADING DATA..." : "SUBMIT REGISTRATION"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;