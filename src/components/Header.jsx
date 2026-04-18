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
      <h2>About Me</h2>
      {/* <div className="header"> */}
        <h1>Gayathri Anandhan</h1>
        <h3>Java Full Stack Developer</h3>
        {/* </div> */}
        <p>
          I am a Java Full Stack Developer with experience in SQL and ERP systems.
          I specialize in building scalable web applications using Java, Spring Boot,
          React, and MySQL.
        </p>
      
    </section>
  );
}


export default Header;