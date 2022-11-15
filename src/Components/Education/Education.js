import "./Education.css";
function Education() {
  return (
    <div className="education">
      <h1>Education</h1>
      <div>
        
        <ul>
        <h2>S.S.C</h2>
          <li>
            SSC: 2010-11
            <p className="institute-name">Nirmal Hridai High School, Khammam</p>
            Percentage:91%
          </li>
          <h2>College</h2>
          
          <li>
            Intermediate: 2011-13
            <p className="institute-name">
              Sri Narayana junior college, Khammam
            </p>
            Percentage:85.4%
          </li>
          <h2>Graduation</h2>
          <li>
            B.tech: 2013-17
            <p className="institute-name">
              J.B.Institute of Engineering and Technology, Hyderabad
            </p>
            Percentage: 71.5%
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Education;
