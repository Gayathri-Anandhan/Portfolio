import '../styles/projects.css';

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2 id="projects">MY PROJECTS</h2>
            <div className="projects-container">

                <div className="project-card">
                    <h3>Hotel Management System – Full Stack Booking App</h3>
                    <p>
                        A comprehensive web application built using Spring Boot that allows users to search for hotels,
                        view available rooms, and make bookings. It supports user authentication with role-based access
                        for users and administrators, providing a complete booking flow.
                    </p>
                    <p><b>Tech Stack:</b></p>
                    <ul>
                        <li><b>Backend:</b> Spring Boot, JPA, REST APIs</li>
                        <li><b>Frontend:</b> React</li>
                        <li><b>Database:</b> MySQL</li>
                        <li><b>Security:</b> Spring Security (Authentication & Role-based Access)</li>
                        <li><b>Payments:</b> Razorpay Integration</li>
                        <li><b>Deployment:</b> Render (Backend), Vercel (Frontend)</li>
                    </ul>

                    <div className="buttons">
                        <a className="demo" href="https://hotelbookappfrontend.vercel.app/" target="_blank">Live Demo</a>
                        <a className="code" href="https://github.com/Gayathri-Anandhan/HotelBook_App" target="_blank">Frontend Code</a>
                        <a className="code" href="https://github.com/Gayathri-Anandhan/HotelBook_App" target="_blank">Backend Code</a>
                    </div>
                </div>

                <div className="project-card">
                    <h3>E-Commerce Platform – Online Shopping System</h3>
                    <p>
                        Full stack e-commerce web application that enables users to browse products, add items to a cart,
                        and securely complete purchases using Razorpay integration. Built with Spring Boot and MySQL,
                        supporting user roles and admin management.
                    </p>
                    <p><b>Tech Stack:</b></p>
                    <ul>
                        <li><b>Backend:</b> Spring Boot (REST APIs)</li>
                        <li><b>Frontend:</b> React</li>
                        <li><b>Database:</b> MySQL</li>
                        <li><b>Security:</b> Spring Security (Authentication & Role-based Access)</li>
                        <li><b>Payment:</b> Razorpay Integration</li>
                        <li><b>Deployment:</b> Render (Backend), Vercel (Frontend)</li>
                    </ul>

                    <div className="buttons">
                        <a className="demo" href="https://e-commerce-app-frontend-xi-nine.vercel.app/" target="_blank">Live Demo</a>
                        <a className="code" href="https://github.com/Gayathri-Anandhan/ECommerceApp_Frontend" target="_blank">Frontend Code</a>
                        <a className="code" href="https://github.com/Gayathri-Anandhan/ECommerceApp_Backend" target="_blank">Backend Code</a>
                    </div>
                </div>

                <div className="project-card">
                    <h3> RealNest – Full Stack Real Estate Platform</h3>
                    <p>
                        Full stack real estate application that enables users to list, browse, and manage properties.
                        Includes role-based access, property approval system, search functionality, and detailed views.
                    </p>
                    <p><b>Tech Stack:</b></p>
                    <ul>
                        <li><b>Backend:</b> Spring Boot (REST APIs, Business Logic)</li>
                        <li><b>Frontend:</b> React (Axios, React Router)</li>
                        <li><b>Database:</b> MySQL</li>
                        <li><b>Security:</b> Spring Security with JWT Authentication</li>
                        <li><b>Deployment:</b> Render (Backend), Vercel (Frontend)</li>
                    </ul>

                    <div className="buttons">
                        <a className="demo" href="https://real-nest-frontend.vercel.app/" target="_blank">Live Demo</a>
                        <a className="code" href="https://github.com/Gayathri-Anandhan/RealNest_frontend" target="_blank">Frontend Code</a>
                        <a className="code" href="https://github.com/Gayathri-Anandhan/RealNest_backend" target="_blank">Backend Code</a>
                    </div>
                </div>

            </div>
        </section>

    );
}

export default Projects;