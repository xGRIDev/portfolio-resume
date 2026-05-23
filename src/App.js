import './App.css';
import { hero } from './components/hero/hero.jsx';
import { Skills } from './components/skills/skills.jsx';

function App() {
  return (
    <div className="App">
      <section>
        <div className="hero-section">
          {hero()}
        </div>
      </section>
      <section className="px-6 py-20 md:px-16 lg:px-32">
        <div className="skills-section">
          {Skills()}
        </div>
      </section>
    </div>
  );
}

export default App;
