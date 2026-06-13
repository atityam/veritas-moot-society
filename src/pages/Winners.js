import React from 'react';

const Winners = () => {
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/page-header.jpg')`
  };

  const pastWinners = [
    {
      year: "2026",
      event: "Lex Maven National Moot Court Competition",
      winner: "Barkatullah Vishwavidyalaya, Bhopal",
      runnerUp: "Christ University, Delhi NCR",
      specialAward: "Government New Law College, Indore",
      bestCounsel: "School of Law, Devi Ahilya Vishwavidyalaya, Indore",
      bestResearcher: "Indore Institute of Law, Indore",
      link: "#"
    },
    {
      year: "2026",
      event: "Client Counselling Competition",
      winner:
        "Ms. Paramita Mazumder & Mr. Shashank Singh (Christ University, Delhi NCR)",
      runnerUp:
        "Mr. Udit Raj Chourasia & Ms. Tejaswi Kunwar Tomar (IPS College, Indore)",
      specialAward:
        "Ms. Jiya Hedav (Govt. New Law College, Indore)",
      link: "#"
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

        <p className="legal-para">
          Recognizing the exceptional advocacy, counselling, and research
          skills demonstrated by participants in previous editions of our
          competitions.
        </p>

        <div className="winners-list">
          {pastWinners.length === 0 ? (
            <div
              className="placeholder-card"
              style={{
                textAlign: 'center',
                padding: '30px',
                background: '#f9f9f9',
                border: '1px dashed #800000'
              }}
            >
              <h3>No Results Available</h3>
              <p>Competition results will be published here once announced.</p>
            </div>
          ) : (
            pastWinners.map((item) => (
              <div
                key={`${item.event}-${item.year}`}
                className="winner-row-item"
              >
                <div className="winner-info">
                  <h3>
                    {item.event} ({item.year})
                  </h3>

                  <p>
                    <strong>🏆 Winner:</strong> {item.winner}
                  </p>

                  <p>
                    <strong>🥈 Runner-Up:</strong> {item.runnerUp}
                  </p>

                  {item.event === "Lex Maven National Moot Court Competition" && (
                    <>
                      <p>
                        <strong>📜 Best Memorial:</strong> {item.specialAward}
                      </p>

                      <p>
                        <strong>⭐ Best Counsel:</strong> {item.bestCounsel}
                      </p>

                      <p>
                        <strong>📚 Best Researcher:</strong> {item.bestResearcher}
                      </p>
                    </>
                  )}

                  {item.event === "Client Counselling Competition" &&
                    item.specialAward && (
                      <p>
                        <strong>⭐ Best Counsel:</strong> {item.specialAward}
                      </p>
                    )}
                </div>

                {item.link && item.link !== '#' && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="view-btn"
                  >
                    View Result PDF
                  </a>
                )}
              </div>
            ))
          )}
        </div>

        <div
          className="placeholder-card"
          style={{
            marginTop: '50px',
            textAlign: 'center',
            padding: '30px',
            background: '#f9f9f9',
            border: '1px dashed #800000'
          }}
        >
          <h3>Future Competitions</h3>
          <p>
            Results for upcoming sessions will be updated here after the final
            rounds and official declaration of results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Winners;