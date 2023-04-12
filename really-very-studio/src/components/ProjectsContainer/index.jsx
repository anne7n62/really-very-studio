import React from "react";
import { Container, ProjectList } from "./styles";
import Project from "../Project";

const ProjectsContainer = ({ projects }) => {
  return (
    <Container>
      <ProjectList>
        {projects.map((data) => (
          <Project key={data.id} project={data} />
        ))}
        {/* <div>
          {projects.map((data) => (
            <p>{data.attributes.Short_description}</p>
          ))}
        </div> */}
      </ProjectList>
    </Container>
  );
};

export default ProjectsContainer;
