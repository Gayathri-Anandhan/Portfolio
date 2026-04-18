import '../styles/Certifications.css';
function Certifications() {
    return (
        <section id="certifications">
            <h2 id="certifications">Certifications</h2>

            <div className="projects-container">

                <div className="project-card">
                    <h3>Java Full Stack Development</h3>
                    <p>Completed certification covering frontend and backend development using Spring Boot, React and SQL.</p>
                    <p><b>Organization:</b> GUVI</p>
                </div>

                <div className="project-card">
                    <h3>Internship Training on Artificial Intelligence and Machine Learning</h3>
                    <p>Gained foundational knowledge in AI/ML concepts and practical implementation.</p>
                    <p><b>Organization:</b> Crux Cloud Technologies</p>
                </div>

                <div className="project-card">
                    <h3>Python Bootcamp</h3>
                    <p>Learned core Python programming concepts and problem-solving techniques.</p>
                    <p><b>Platform:</b> Udemy</p>
                </div>

            </div>
        </section>
    )
}
export default Certifications;