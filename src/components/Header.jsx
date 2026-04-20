import '../styles/Header.css';
import '../styles/about.css';

function Header() {
  // return (
  //   <div className="header">
  //     <h1>Gayathri Anandhan</h1>
  //     <h3>Java Full Stack Developer</h3>
  //     {/* <p>Building scalable web applications using Java, React, and SQL</p> */}
  //   </div>
  // );
  return (
    <section id="about" className="about">
      {/* <h1>Gayathri Anandhan</h1>
        <h3>(Java Full Stack Developer)</h3>
        <p>
          I am a Java Full Stack Developer with experience in SQL and ERP systems.
          I specialize in building scalable web applications using Java, Spring Boot,
          React, and MySQL.
        </p> */}
      <h1>Hi, I'm Gayathri</h1>
      <h3>Java Full Stack Developer</h3>
      <p>I build scalable web applications using Java, Spring Boot, React and MySQL.</p>
      <a href="#projects" className="hero-btn">View My Work</a>

    </section>
  );
}


export default Header;