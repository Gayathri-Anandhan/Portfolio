import '../styles/Certifications.css';
function Certifications() {
    return (
        <section id="certifications">
            <h2 id="certifications">CERTIFICATIONS</h2>

            <div className="projects-container">

                <div className="project-card">
                    <h3>Java Full Stack Development</h3>
                    <p>Completed certification covering frontend and backend development using Spring Boot, React and SQL.</p>
                    <p><b>Organization:</b> GUVI</p>
                    <a className="Link" href="https://drive.google.com/file/d/1BKwAXy8d2_1SKN4uhE2j_7Ol59NtQ8Wa/view?usp=drivesdk" target="_blank">View Certificate</a>
                </div>

                <div className="project-card">
                    <h3>Internship Training on Artificial Intelligence and Machine Learning</h3>
                    <p>Gained foundational knowledge in AI/ML concepts and practical implementation.</p>
                    <p><b>Organization:</b> Crux Cloud Technologies</p>
                    <a className="Link" href="https://drive.google.com/file/d/1G9PgASeb9O1cAji0-TKugCkA2WTm9R01/view?usp=drivesdk" target="_blank">View Certificate</a>
                </div>

                <div className="project-card">
                    <h3>Python Bootcamp</h3>
                    <p>Learned core Python programming concepts and problem-solving techniques.</p>
                    <p><b>Platform:</b> Udemy</p>
                    <a className="Link" href="https://drive.google.com/file/d/1c_2tf0JpJT06lWH1T5qHmwQ2sdt3zKjQ/view?usp=drivesdk" target="_blank">View Certificate</a>
                </div>

            </div>
        </section>
    )
}
export default Certifications;