import React from "react";
import { ProjectCoverList, ProjectCoverContainer, ProjectCover } from "./styles";

const Project = ({ project }) => (
  <>
    <ProjectCoverList>
      <ProjectCoverContainer>
        <ProjectCover alt={`Project cover for ${project.attributes.Title}`} src={"http://localhost:1337" + project.attributes.Cover_image.data.attributes.url} />
      </ProjectCoverContainer>
    </ProjectCoverList>
  </>
);

export default Project;
