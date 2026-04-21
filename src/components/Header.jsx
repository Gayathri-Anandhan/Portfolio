import "../styles/Header.css";

function Header() {
  return (
    <section id="about" className="hero">

      <div className="hero-container">

        <p className="intro-tag">Hello, I'm</p>

        <h1 className="hero-name">Gayathri Anandhan</h1>

        <h2 className="hero-role">Java Full Stack Developer</h2>

        <p className="hero-desc">
          I build scalable web applications using Java, Spring Boot, React, and MySQL.
          I enjoy creating clean, efficient, and user-friendly systems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>

          {/* <a href="/resume.pdf" download className="btn secondary"> */}
          <a
            href="https://drive.google.com/uc?export=download&id=183lrs-nytpWRs1WC7rwU0Ne9hMo9rgTZ"
            className="btn secondary">
            Download Resume
          </a>

          <a href="#contact" className="btn outline">
            Contact Me
          </a>
        </div>

      </div>

    </section>
  );
}

export default Header;