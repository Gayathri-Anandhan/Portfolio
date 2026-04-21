import React from "react";
import "../styles/Education.css";

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>

      <div className="timeline">

        {/* College */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Bachelor of Engineering</h3>
            <p className="subtitle">
              Electronics & Instrumentation Engineering
            </p>
            <p className="place">Sri Sairam Engineering College</p>
            <span className="year">2021 - 2025</span>
            <div className="score">CGPA: 7.9</div>
          </div>
        </div>

        {/* Higher Secondary */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Higher Secondary (HSLC)</h3>
            <p className="place">Sethu Bhaskara Matric Hr. Sec. School</p>
            <span className="year">2021</span>
            <div className="score">Percentage: 91.96%</div>
          </div>
        </div>

        {/* SSLC */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Secondary School (SSLC)</h3>
            <p className="place">Sharon Matric Hr. Sec. School</p>
            <span className="year">2019</span>
            <div className="score">Percentage: 86.6%</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;