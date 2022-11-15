function ProjectBody(props) {
  return (
    <>
      <div>
        <ul>
          <li>
            <b>{props.projectName}</b>
            <p className="project-description">
              {props.description} The tech-stack used for the project is{" "}
              {props.techStack}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
export default ProjectBody