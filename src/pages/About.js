import React from 'react';

const About = () => {
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/page-header.jpg')`
  };

  return (
    <div className="fade-in">
      {/* Dynamic Page Header */}
      <div className="page-header" style={headerStyle}>
        <h2>About Veritas</h2>
        <div className="breadcrumb">Home / About</div>
      </div>

      <div className="container">
        <div className="side-by-side">
          {/* Text Area - Now set to equal width */}
          <div className="text-area">
            <h2 className="section-title">The Veritas Vision</h2>
            <p>
              The Veritas Mooting Society, functioning under the aegis of the Chameli Devi Institute of Law, is a structured academic body established with the objective of promoting experiential and practice-oriented legal education. The Society operates in alignment with the institutional policy of integrating theoretical legal instruction with advocacy-based learning, with the aim of enhancing professional competence, ethical awareness, and analytical skills among law students.
            </p>
            <p>
              In furtherance of its academic mandate, the Society undertakes the systematic organization of moot court competitions, advocacy training programmes, workshops, and scholarly activities designed to strengthen legal research aptitude, interpretative reasoning, and structured argumentation.
            </p>
            <p>
              The Veritas Mooting Society adopts a policy-driven approach to student development by encouraging discipline, collaborative learning, academic rigor, and adherence to ethical standards governing legal practice.
            </p>
            <p>
              Through its activities, the Society seeks to contribute to the holistic development of students by fostering clarity of thought, confidence in oral and written advocacy, and a commitment to fairness and justice.
            </p>
          </div>

          {/* Image Area - Now set to equal width */}
          <div className="image-area">
            <img 
              src="/assets/moot-court.jpg" 
              alt="Moot Court Hall" 
              className="styled-frame" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;