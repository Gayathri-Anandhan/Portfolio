import '../styles/skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        <div className="skill-box">
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>

        <div className="skill-box">
          <h3>Backend</h3>
          <p>Java, Spring Boot</p>
        </div>

        <div className="skill-box">
          <h3>Database</h3>
          <p>MySQL</p>
        </div>

        <div className="skill-box">
          <h3>Tools</h3>
          <p>Git, GitHub, Postman</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;