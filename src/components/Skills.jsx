import "../styles/skills.css";

function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      subskills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
    },
    {
      title: "Backend Development",
      subskills: ["Java", "Spring Boot", "REST APIs", "Spring Security", "OOP"],
    },
    {
      title: "Database",
      subskills: ["MySQL", "SQL Queries", "Joins", "Normalization", "CRUD"],
    },
    {
      title: "Tools & Platforms",
      subskills: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-container">
        {skills.map((item, index) => (
          <div className="skill-box" key={index}>
            <h3>{item.title}</h3>

            <div className="subskills">
              {item.subskills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;