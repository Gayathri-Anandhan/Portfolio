import "../styles/projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">

      <h2 className="section-title">Projects</h2>

      <div className="projects-wrapper">

        {/* PROJECT 1 */}
        <div className="project-block">
          <h3>Hotel Management System</h3>
          <p>
            Full stack booking application with hotel search, room booking,
            role-based authentication and payment integration.
          </p>

          <p className="tech">
            Spring Boot • React • MySQL • Spring Security • Razorpay
          </p>

          <div className="project-links">
            <a href="https://hotelbookappfrontend.vercel.app/" target="_blank">Live</a>
            <a href="https://github.com/Gayathri-Anandhan/HotelBook_App" target="_blank">Frontend</a>
            <a href="https://github.com/Gayathri-Anandhan/HotelBook_App" target="_blank">Backend</a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project-block">
          <h3>E-Commerce Platform</h3>
          <p>
            Online shopping system with cart, product browsing and secure payment integration.
          </p>

          <p className="tech">
            Spring Boot • React • MySQL • Spring Security • Razorpay
          </p>

          <div className="project-links">
            <a href="https://e-commerce-app-frontend-xi-nine.vercel.app/" target="_blank">Live</a>
            <a href="https://github.com/Gayathri-Anandhan/ECommerceApp_Frontend" target="_blank">Frontend</a>
            <a href="https://github.com/Gayathri-Anandhan/ECommerceApp_Backend" target="_blank">Backend</a>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project-block">
          <h3>RealNest – Real Estate Platform</h3>
          <p>
            Property listing system with JWT authentication, role-based access and search functionality.
          </p>

          <p className="tech">
            Spring Boot • React • MySQL • JWT • REST APIs
          </p>

          <div className="project-links">
            <a href="https://real-nest-frontend.vercel.app/" target="_blank">Live</a>
            <a href="https://github.com/Gayathri-Anandhan/RealNest_frontend" target="_blank">Frontend</a>
            <a href="https://github.com/Gayathri-Anandhan/RealNest_backend" target="_blank">Backend</a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Projects;