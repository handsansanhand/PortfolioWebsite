import LogoItem from './Logoitem';
import './Projectdetails.css';

function Projectdetails({ selectedProject }) {
  const projectDetails1 = [
    'Developed a simple to-do list application which allows users to register or sign up, set to-do tasks, and assign them as completed. The application deploys microservice arcitechture, RESTful APIs, persistent data storage, and user authentication. The backend was coded in Java, and the frontend was built using React.',
    'Details for HVAC Based Building Simulator...',
    'Details for Excelsior LLM...',
    'Details for Cascadia...'
  ];
  const logoItems = [
      [
    { src: "Java_programming_language_logo.svg.png", alt: "Java Logo", label: "Java" },
    { src: "springboot.png", alt: "Spring Boot Logo", label: "Spring Boot" },
    { src: "docker.png", alt: "Docker Logo", label: "Docker" },
    { src: "react.png", alt: "React Logo", label: "React" },
    { src: "postgresql.png", alt: "GitHub Logo", label:"PostgreSQL" }, 
    { src: "github.png", alt: "GitHub Logo", label:"GitHub"}
  ],
  [
    { src: "Java_programming_language_logo.svg.png", alt: "Java Logo", label: "Java" },
    { src: "springboot.png", alt: "SpringBoot Logo", label: "SpringBoot" },
    { src: "docker.png", alt: "Docker Logo", label: "Docker" },
    { src: "github.png", alt: "GitHub Logo", label: "GitHub" },
    { src: "maven.png", alt: "Maven Logo", label: "Maven" },
  ],
  [
    { src: "Java_programming_language_logo.svg.png", alt: "Java Logo", label: "Java" },
    { src: "github.png", alt: "GitHub Logo", label: "GitHub" },
    { src: "Python-logo-notext.svg.png", alt: "Python Logo", label: "Python" },
  ],
  [
    { src: "Java_programming_language_logo.svg.png", alt: "Java Logo", label: "Java" },
    { src: "github.png", alt: "GitHub Logo", label: "GitHub" },
    { src: "maven.png", alt: "Maven Logo", label: "Maven" },
  ],
  ];
   const gitHubLink = [
    'https://github.com/handsansanhand/ToDoList',
    'https://github.com/handsansanhand/Final-Year-Project---21467574',
    'https://github.com/jurmangandar/software_project_3',
    'https://github.com/handsansanhand/Cascadia---Group-18'
  ];

  return (
    <div className="projectDetails">
      {selectedProject !== null ? (
            <div>
                {projectDetails1[selectedProject]}
               
  <div className="bottomContainer">
    <div className="bottomColumn">
      <div className="containerTitle">Methodologies & Tools</div>
      <ul>
        <li>Microservices</li>
        <li>RESTful APIs</li>
        <li>Persistent Data Handling</li>
        <li>SQL</li>
    </ul>
    </div>
    <div className="technologiesUsed">
      <div className="containerTitle">Technologies Used</div>
       <div className="technologiesUsedLogos">
    {logoItems[selectedProject].map((item, index) => (
      <LogoItem key={index} src={item.src} alt={item.alt} label={item.label} />
    ))}
  </div>
    </div>
  </div> <div className="gitHubLinkContainer">
                GitHub Link:
  <a 
    href={gitHubLink[selectedProject]} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    {gitHubLink[selectedProject]}
  </a>
        </div>    
            </div>
      ) : (
        <div>Select a project to see details</div>
      )}
    </div>
  );
}

export default Projectdetails;
