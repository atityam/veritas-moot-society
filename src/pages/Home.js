import React from 'react';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Animated Hero Section */}
      <div className="home-hero">
        <img src="/assets/home-hero.jpg" alt="Hero Animation" />
      </div>

      <div className="container">
        <div className="side-by-side">
          {/* Content Section (50% Width) */}
          <div className="text-area">
            <h2 className="section-title">Chameli Devi Institute of Law</h2>
            <p>
              The Chameli Devi Institute of Law was established in 2022 with a focused vision to cultivate a 
              new generation of legal professionals equipped to tackle the complexities of the modern world. 
              Recognizing the dynamic evolution of legal practice, the Institute aims to provide holistic 
              legal education that goes beyond traditional classroom instruction.
            </p>
            <p>
              It offers a contemporary curriculum designed to blend core legal principles with practical skills, 
              emphasizing corporate ethics, technological fluency, and emerging areas of law. The Institute's 
              mission is centered on nurturing well-rounded individuals by promoting interdisciplinary engagement, 
              facilitating practical exposure through moot courts, simulations, and internships, and fostering 
              strong professional values.
            </p>
            <p>
              Through these efforts, the Chameli Devi Institute of Law strives to produce competent, 
              ethically-grounded advocates, jurists, and legal scholars prepared for both national and 
              international challenges.
            </p>
          </div>

          {/* Image Section (50% Width) */}
          <div className="image-area">
            <img 
              src="/assets/clg-infra.jpg" 
              alt="Chameli Devi Institute of Law Infrastructure" 
              className="styled-frame" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;