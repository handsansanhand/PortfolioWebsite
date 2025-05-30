

import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import './Projectspage.css'

//a list containing all the projects
function Projectlist() {
      const projects = [
    'To-Do App',
    'Portfolio Website',
    'REST API Service',
    'Chat Application'
  ];
          const navigate = useNavigate();
return (
    <>
    <div className="projectListContainer">
      {projects.map((project, index) => (
        <div key={index} className="projectCard">
          <h4>{project}</h4>
        </div>
      ))}
    </div>
    </>
       
    );
}
export default Projectlist;