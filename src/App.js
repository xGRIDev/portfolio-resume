import './App.css';
import { hero } from './components/hero/hero.jsx';
function App() {
  return (
    <div className="App">
      <section>{hero()}</section>
    </div>
  );
}

export default App;
