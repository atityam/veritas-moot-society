import React from 'react';

const Resources = () => {
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/page-header.jpg')`
  };

  const competitions = [
    {
      title: "Client Counselling Competition - 2026",
      registrationClosed: true, // Custom flag to handle closed state
      docs: [
        { name: "Brochure", link: "/assets/docs/client-counselling-brochure.pdf" },
        { name: "The Rule Book", link: "/assets/docs/client-counselling-rules.pdf" },
        { name: "The Problem", link: "/assets/docs/client-counselling-problem.pdf" },
        { name: "Registration Form", link: "#" } 
      ]
    },
    {
      title: "National Moot Court Competition - 2026",
      registrationClosed: true,
      docs: [
        { name: "Brochure", link: "/assets/docs/moot-court-brochure.pdf" },
        { name: "The Rule Book", link: "/assets/docs/moot-court-rules.pdf" },
        { name: "The Problem", link: "/assets/docs/moot-court-problem.pdf" },
        { name: "Registration Form", link: "https://docs.google.com/forms/d/1x6v3Lgw3SaBrUqJLz-0bQkbaN7UZLH2C0yxhjtlKO-0/viewform" }
      ]
    }
  ];

  return (
    <div className="fade-in">
      <div className="page-header" style={headerStyle}>
        <h2>Moot Problem & Rules</h2>
        <div className="breadcrumb">HOME / RESOURCES</div>
      </div>

      <div className="container">
        {competitions.map((comp, index) => (
          <div key={index} className="resource-section-box">
            <h3 className="section-title" style={{ borderBottom: 'none', marginBottom: '10px' }}>
              {comp.title}
            </h3>
            <div className="resource-grid">
              {comp.docs.map((doc, docIndex) => {
                const isRegForm = doc.name === "Registration Form";
                const isClosed = isRegForm && comp.registrationClosed;

                return (
                  <div key={docIndex} className="resource-item-card" style={{ 
                    background: '#f9f9f9', 
                    padding: '20px', 
                    border: '1px solid #eee', 
                    textAlign: 'center',
                    opacity: isClosed ? 0.7 : 1 // Dim the card if closed
                  }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>{doc.name}</p>
                    
                    {isClosed ? (
                      <span className="view-btn" style={{ 
                        fontSize: '14px', 
                        padding: '10px 20px', 
                        background: '#666', 
                        cursor: 'not-allowed' 
                      }}>
                        CLOSED
                      </span>
                    ) : (
                      <a 
                        href={doc.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="view-btn"
                        style={{ fontSize: '14px', padding: '10px 20px' }}
                      >
                        {isRegForm ? "Go to Form" : "View PDF"}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;