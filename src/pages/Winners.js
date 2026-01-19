import React from 'react';

const Winners = () => {
    const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/page-header.jpg')`
  };
  // You can add data here as winners are announced
//   const pastWinners = [
//     {
//       year: "2025",
//       event: "National Moot Court Competition",
//       winner: "School of Law, SASTRA University",
//       runnerUp: "University School of Law and Legal Studies, GGSIPU",
//       link: "/assets/docs/winners-2025.pdf"
//     }
//   ];

  return (
    <div className="fade-in">
      {/* Page Header at the top as requested */}
      <div className="page-header" style={headerStyle}>
        <h2>Winners</h2>
        <div className="breadcrumb">HOME / WINNERS</div>
      </div>

      {/* <div className="container">
        <h2 className="section-title">Hall of Fame</h2>
        <p className="legal-para">Recognizing the exceptional advocacy and research skills of participants in our previous editions.</p>

        <div className="winners-list">
          {pastWinners.map((item, index) => (
            <div key={index} className="winner-row-item">
              <div className="winner-info">
                <h3>{item.event} ({item.year})</h3>
                <p><strong>🏆 Winner:</strong> {item.winner}</p>
                <p><strong>🥈 Runner Up:</strong> {item.runnerUp}</p>
              </div>
              <a href={item.link} target="_blank" rel="noreferrer" className="view-btn">
                View Result PDF
              </a>
            </div>
          ))}
        </div>

       
        <div className="placeholder-card">
          <h3>2026 Competition Results</h3>
          <p>Results for the current session will be updated here after the final rounds.</p>
        </div> </div>   */} 
      
    </div>
  );
};

export default Winners;