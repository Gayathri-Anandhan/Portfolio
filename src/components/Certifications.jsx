import "../styles/Certifications.css";

function Certifications() {
  const certifications = [
    {
      title: "Java Full Stack Development",
      desc: "Completed certification covering frontend and backend development using Spring Boot, React and SQL.",
      org: "GUVI",
      link: "https://drive.google.com/file/d/1BKwAXy8d2_1SKN4uhE2j_7Ol59NtQ8Wa/view?usp=drivesdk",
    },
    {
      title: "Internship Training on Artificial Intelligence and Machine Learning",
      desc: "Gained foundational knowledge in AI/ML concepts and practical implementation.",
      org: "Crux Cloud Technologies",
      link: "https://drive.google.com/file/d/1G9PgASeb9O1cAji0-TKugCkA2WTm9R01/view?usp=drivesdk",
    },
    {
      title: "Python Bootcamp",
      desc: "Learned core Python programming concepts and problem-solving techniques.",
      org: "Udemy",
      link: "https://drive.google.com/file/d/1c_2tf0JpJT06lWH1T5qHmwQ2sdt3zKjQ/view?usp=drivesdk",
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>

      <div className="certifications-container">
        {certifications.map((item, index) => (
          <div className="certification-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <p className="org">
              <b>Organization:</b> {item.org}
            </p>

            <a href={item.link} target="_blank" rel="noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;