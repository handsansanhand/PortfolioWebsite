import './Projectdetails.css';

function Projectdetails({ selectedProject }) {
  const projectDetails1 = [
    'Developed a simple to-do list application which allows users to register or sign up, set to-do tasks, and assign them as completed. The application deploys microservice arcitechture, RESTful APIs, persistent data storage, and user authentication. The backend was coded in Java, and the frontend was built using React.',
    'Details for HVAC Based Building Simulator...',
    'Details for Excelsior LLM...',
    'Details for Cascadia...'
  ];
   const gitHubLink = [
    'https://github.com/handsansanhand/ToDoList',
    'Details for HVAC Based Building Simulator...',
    'Details for Excelsior LLM...',
    'Details for Cascadia...'
  ];

  return (
    <div className="projectDetails">
      {selectedProject !== null ? (
            <div>
                {projectDetails1[selectedProject]}
               
  <div className="bottomContainer">
    <div className="bottomColumn">
      <h3>Column 1</h3>
      <p>Details for the first thing.</p>
    </div>
    <div className="technologiesUsed">
      <div className="technologiesUsedTitle">Technologies Used</div>
      <p>Details for the second thing.</p>
    </div>
  </div>     
            </div>
      ) : (
        <div>Select a project to see details</div>
      )}
    </div>
  );
}

export default Projectdetails;
