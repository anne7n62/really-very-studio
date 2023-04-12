import styled from "styled-components";

export const ProjectCoverList = styled.div`
  width: 100vw;
  display: flex;
  padding: 50px 40px;

  &:nth-of-type(2n) {
    justify-content: flex-end;
  }
`;

export const ProjectCoverContainer = styled.div`
  max-width: 45vw;
  width: 100%;
  height: 400px;
  background-color: red;
`;

export const ProjectCover = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0;
  object-fit: cover;
  transition: border-radius 1s;

  &:hover {
    border-radius: 170px;
  }
`;
