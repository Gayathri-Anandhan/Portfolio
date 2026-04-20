// import '../styles/skills.css';

// function Skills() {
//   return (
//     <section id="skills" className="skills">
//       <h2>SKILLS</h2>

//       <div className="skills-container">
//         <div className="skill-box">
//           <h3>Frontend</h3>
//           <p>HTML, CSS, JavaScript, React</p>
//         </div>

//         <div className="skill-box">
//           <h3>Backend</h3>
//           <p>Java, Spring Boot</p>
//         </div>

//         <div className="skill-box">
//           <h3>Database</h3>
//           <p>MySQL</p>
//         </div>

//         <div className="skill-box">
//           <h3>Tools</h3>
//           <p>Git, GitHub, Postman</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;


import '../styles/skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-container">

        <div className="skill-box">
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML5, CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Backend Development</h3>
          <ul>
            <li>Java (OOP Concepts)</li>
            <li>Spring Boot</li>
            <li>REST API Development</li>
            <li>Spring Security (Authentication & Authorization)</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Database Management</h3>
          <ul>
            <li>MySQL</li>
            <li>SQL Queries & Joins</li>
            <li>Normalization</li>
            <li>CRUD Operations</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Tools & Platforms</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Postman (API Testing)</li>
            <li>Vercel & Render (Deployment)</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;