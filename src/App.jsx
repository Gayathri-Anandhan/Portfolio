import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications'
import Contact from './components/Contact'
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <About/> */}
      <Skills/>
      <Projects/>
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;