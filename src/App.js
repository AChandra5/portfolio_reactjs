
import './App.css';
import Component1 from './Components/Component1/Component1';  
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import ProjectBody from './Components/Projects/ProjectBody';
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
      <Projects  />
      <ProjectBody description = "A registration page or a sign-up form is made for this project. The validation part is also made sure that the user gives correct credentials matching all the conditions for the credentials. The page submits only if all the validation criteria given by the user is correct. Otherwise the user gets the error mark where he is committing the error." projectName= "Registration form validation" techStack ="HTML, CSS and JS" />
      <ProjectBody projectName ="Portfolio " description ="A portfolio project was to showcase the details of carriculum vitae like the Education, Achievements, Projects made and skills acquired so far." techStack="React.js, HTML, CSS." />
      <ProjectBody projectName ="Order status management" description ="This project mainly focuses on the queue stack that is dedicated to recieve and delivee r the order. Asynchronous Java Script is made use to complete the project." techStack="HTML, CSS, Bootstrap and Java Script." />
      <hr />
      <Skills />
      </div>
    </div>
      
    </div>
  );
}

export default App;
