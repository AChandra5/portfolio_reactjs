
import './App.css';
import Component1 from './Components/Component1/Component1';  
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Achievements from './Components/Achievements/Achievements';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
    <Component1 />
    <div className="body">
      <div className="left-side">
      <Education />
      <hr />
      <Achievements />
      </div>
      <div className="right-side">
      <Projects />
      <hr />
      <Skills />
      </div>
    </div>
      
    </div>
  );
}

export default App;
