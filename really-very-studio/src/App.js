import React, { useState, useEffect } from "react";
import ProjectsContainer from "./components/ProjectsContainer";
import Hero from "./components/Hero";

//fetching projects API and place in projects array
const App = () => {
  const [projects, setProjects] = useState([]); // <-- array

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("http://localhost:1337/api/projects?populate=*")
      .then((response) => response.json())
      .then(({ data }) => setProjects(data)); // <-- save the data array
  }, []);

  console.log(projects);

  return (
    <>
      <Hero />
      <ProjectsContainer projects={projects} />
    </>
  );
};

export default App;
