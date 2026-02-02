import React from 'react';

const Winners = () => {
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/page-header.jpg')`
  };

  const pastWinners = [
    {
      year: "2026",
      event: "Client Counselling Competition",
      winner: "Ms. Paramita Mazumder & Mr. Shashank Singh (Christ University, Delhi NCR)",
      runnerUp: "Mr. Udit Raj Chourasia & Ms. Tejaswi Kunwar Tomar (IPS COLLEGE, Indore)",
      specialAward: "Best Counsel: Ms. Jiya Hedav (Govt. New Law College, Indore)",
      link: "#" // You can replace this with a PDF link later
    }
  ];

  return (
    <div className="fade-in">
      <div className="page-header" style={headerStyle}>
        <h2>Winners</h2>
        <div className="breadcrumb">HOME / WINNERS</div>
      </div>

      <div className="container">
        <h2 className="section-title">Hall of Fame</h2>
        <p className="legal-para">Recognizing the exceptional advocacy and research skills of participants in our previous editions.</p>

        <div className="winners-list">
          {pastWinners.map((item, index) => (
            <div key={index} className="winner-row-item">
              <div className="winner-info">
                <h3>{item.event} ({item.year})</h3>
                <p><strong>🏆 Winner:</strong> {item.winner}</p>
                <p><strong>🥈 Runner Up:</strong> {item.runnerUp}</p>
                {item.specialAward && (
                  <p><strong>⭐ {item.specialAward}</strong></p>
                )}
              </div>
              {item.link !== "#" && (
                <a href={item.link} target="_blank" rel="noreferrer" className="view-btn">
                  View Result PDF
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="placeholder-card" style={{ marginTop: '50px', textAlign: 'center', padding: '30px', background: '#f9f9f9', border: '1px dashed #800000' }}>
          <h3>Future Competitions</h3>
          <p>Results for upcoming sessions will be updated here after the final rounds.</p>
        </div>
      </div>
    </div>
  );
};

export default Winners;
