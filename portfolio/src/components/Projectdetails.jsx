import LogoItem from './Logoitem';
import './Projectdetails.css';

function Projectdetails({ selectedProject }) {
  const projectDetails1 = [
    'Developed a simple to-do list application which allows users to register or sign up, set to-do tasks, and assign them as completed. The application deploys microservice arcitechture, RESTful APIs, persistent data storage, and user authentication. The backend was coded in Java, and the frontend was built using React.',
    'As part of my final year project at U.C.D, I developed a building simulator from scratch. This simulator contains HVAC (Heating, Ventilation, and Air Conditioning) sensors and heavily utilises WoT (Web of Things) technology. As well as the building aspect of the simulation, there is also a decision-making agent who exists inside the building, and a temperature + light level simulation model which changes based on the current time within the simulation. This project was coded in Java + JavaScript and deployed microservice architecture and RESTful APIs.',
    'Working as a group, I contributed towards the creation and development of an AI powered Java-coded program which generates a comic based on the user’s input, complete with characters, narrators, poses, backgrounds, and a multitude of different layouts which the comic may be structured. The program works with OpenAI’s completions, embeddings and moderation APIs, and works with a database for storing poses and backgrounds.',
    'As part of a team, I contributed towards the creation and development of a comprehensive interactive digital adaptation of the board game Cascadia. Additionally, I contributed towards implementing a sophisticated AI bot capable of engaging in gameplay with selectable difficulty levels. '
  ];
  const methodologiesAndTools = [
    [
      'Microservices',
      'RESTful APIs',
      'Persistent Data Handling',
      'SQL',
      'Database Management',
      'Version Control (GitHub)'
    ],
     [
      'Web of Things (WoT)',
      'Internet of Things (IoT)',
      'Microservices',
      'RESTful APIs',
      'HTTP/CoAP',
      'System Design',
      'Unit Testing',
      'Simulations',
      'JQuery',
      'Version Control (GitHub)'
    ],
     [
      'Artificial Intelligence (AI)',
      'Large Language Models (LLMs)',
      'API Integration',
      'Prompting',
      'Unit Testing',
      'Group Work',
      'Agile Software Development',
      'Version Control (GitHub)'
    ],
     [
      'Unit Testing',
      'Artificial Intelligence (AI)',
      'Group Work',
      'Agile Software Development',
      'Version Control (GitHub)'
    ],
  ]
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
     {src: "JavaScript-Logo-300x169.png", alt:"JavaScript Logo", label:"JavaScript"} 
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

        <ul className="methodologiesAndToolsList">
    {methodologiesAndTools[selectedProject].map((methodology, index) => (
      <li key={index}>{methodology}</li>
    ))}
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
        <div className="backUpText">Select a project to see details</div>
      )}
    </div>
  );
}

export default Projectdetails;
