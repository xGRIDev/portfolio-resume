import './App.css';
import  Hero  from './components/hero/hero.jsx';
import  Skills  from './components/skills/skills.jsx';
import  Navbar  from './components/navbar/navbar.jsx';
import  Recents  from './components/recents/recents.jsx';
import  footer  from './components/footer/footer.jsx';
import  Education  from './components/education/education.jsx';
import Careers from './components/education/careers.jsx';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './components/loader/loading.jsx';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });

    const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => clearTimeout(timer);
  } , []);

  if (loading) {
  return <Loading />;
}
  return (
    <div className="App"> 
      <div className="navbar">
        <Navbar />
      </div>
      <section>
        <div className="hero-section">
          <Hero />
        </div>
      </section>
      <section className="px-6 py-20 md:px-16 lg:px-32" id="careers">
          <Careers />
      </section>
      <section className="px-6 py-20 md:px-16 lg:px-32" id="skills">
        <div className="skills-section">
          <Skills />
        </div>
      </section>
      <section className="px-6 py-20 md:px-16 lg:px-32" id="projects">
        <div className="recents-section">
          <Recents />
        </div>
      </section>
      <section className='education' id="educations">
        <Education />
      </section>
      <div className="footer">
        {footer()}
      </div>
    </div>
  );
}

export default App;
