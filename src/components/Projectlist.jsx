

import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Projectspage.css'


//a list containing all the projects
function Projectlist({selectedProject, setSelectedProject}) {
      
      const projects = [
    'To-Do List Application',
    'HVAC Based Building Simulator',
    'Excelsior LLM',
    'Cascadia'
  ];
  const projectDescriptions = [
    'A simple to-do list application which users are able to sign in/register and set themselves tasks.',
    'A fully fledged building simulator containing HVAC sensors, an environment, and agents.',
    'An AI-powered comic strip generator that creates custom comics based on user input.',
    'A digital version of the board game Cascadia.'
  ];
return (
    <>
    <div className="projectListContainer">
      {projects.map((project, index) => (
        <div key={index}
          className={`projectCard ${selectedProject === index ? 'selected' : ''}`}
          onClick={() => setSelectedProject(index)}
         >
          <div className="projectTitle">{project}</div>
          <div className="projectDesc">{projectDescriptions[index]}</div>
        </div>
      ))}
    </div>
    </>
       
    );
}
export default Projectlist;