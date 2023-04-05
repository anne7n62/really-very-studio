import React, { useState, useEffect } from "react";
import ProjectsContainer from "./components/ProjectsContainer";
import Hero from "./components/Hero";

//fetching projects API and place in projects array
const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:1337/api/projects");
      const projects = await response.json();
      setProjects(projects);
    };
    fetchData();
  }, []);

  return (
    <>
      <Hero />
      <ProjectsContainer projects={projects} />
    </>
  );
};

export default App;
