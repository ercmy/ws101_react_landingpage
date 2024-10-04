// src/components/About.js
// src/components/About.js
import React, { useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleAbout = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section id="about">
      <button
        id="toggle-about"
        onClick={toggleAbout}
        style={{
          display: 'block',
          margin: '0 auto',
          padding: '10px 20px',
          fontSize: '20px',
          backgroundColor: '#124E66',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {isVisible ? 'Hide Description' : 'WHAT IS WEB DEVELOPMENT'}
      </button>

      {isVisible && (
        <h3 className="about-meaning">
          Web development refers to the overall process of creating websites or
          web applications, including the project’s design, layout, coding,
          content creation, and functionality. It involves using a combination
          of programming languages, tools, and frameworks to bring a website or
          web application to life. It may also encompass project management
          activities, such as fielding development requests from stakeholders or
          freelance clients. - Allie Decker (2024)
        </h3>
      )}

      <h2
        style={{
          display: 'flex',
          color: 'white',
          justifyContent: 'center',
          fontSize: '60px',
          fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        }}
      >
        IMPORTANCE OF WEB DEVELOPMENT
      </h2>

      <div className="about-content">
        <div className="about-image">
          <img src="num1.png" alt="Importance 1" />
        </div>
        <div className="about-image">
          <img src="num2.png" alt="Importance 2" />
        </div>
        <div className="about-image">
          <img src="num3.png" alt="Importance 3" />
        </div>
        <div className="about-image">
          <img src="num4.png" alt="Importance 4" />
        </div>
        <div className="about-image full-width">
          <img src="num5.png" alt="Importance 5" />
          <img src="num6.png" alt="Importance 6" />
        </div>
      </div>
    </section>
  );
}

export default About;



