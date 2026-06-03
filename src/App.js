import './App.css';
import  Hero  from './components/hero/hero.jsx';
import  Skills  from './components/skills/skills.jsx';
import  Navbar  from './components/navbar/navbar.jsx';
import  Recents  from './components/recents/recents.jsx';
import  footer  from './components/footer/footer.jsx';
import  Education  from './components/education/education.jsx';
import Careers from './components/education/careers.jsx';
import ScrollToTop from './components/scroll-top/scrolltop.jsx';
import CodeContribute from './components/githubcontribute/codecontribute.jsx';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './components/loader/loading.jsx';
import Resume from './components/resume/resume.jsx';
import {  Routes, Route } from 'react-router-dom';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);

  return () => clearTimeout(timer);
  } , []);

  if (loading) {
  return <Loading />;
}

function Home(){
  return (
    <>
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
      <section className="px-6 py-20 md:px-16 lg:px-32" id="projects">
        <div className="recents-section">
          <Recents />
        </div>
      </section>
      <section className="px-6 py-20 md:px-16 lg:px-32" id="skills">
        <div className="skills-section">
          <Skills />
        </div>
      </section>
        <CodeContribute/>
      <section className="px-6 py-20 md:px-16 lg:px-32" id="educations">
        <div className="education-section">
        <Education />
        </div>
      </section>
      <div className="footer">
        {footer()}
      </div>
      <ScrollToTop />
    </>
  )
}
  return (
    <div className="App"> 
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    </div>
  );
}

export default App;
