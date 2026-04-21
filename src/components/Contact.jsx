import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        <div className="contact-card">

          <p>
            <span>Email:</span>
            <a href="mailto:gayathrianandhan2812@gmail.com">
              gayathrianandhan2812@gmail.com
            </a>
          </p>

          <p>
            <span>GitHub:</span>
            <a
              href="https://github.com/Gayathri-Anandhan"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Gayathri-Anandhan
            </a>
          </p>

          <p>
            <span>LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/gayathri-a-09267a225/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/gayathri-a
            </a>
          </p>

        </div>
      </div>
    </section>
  );
}

export default Contact;