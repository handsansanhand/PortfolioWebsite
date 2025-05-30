import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import './Projectlist.css'
import Projectlist from './Projectlist';
import Projectdetails from './Projectdetails';
import { useState } from 'react';

function Projectspage() {
          const [selectedProject, setSelectedProject] = useState(null);
return (
    <>
     <div className="projectsContainer">
        <div className="projectListSection">
             <Projectlist 
                    selectedProject={selectedProject} 
                    setSelectedProject={setSelectedProject}
             />
        </div>
           
        <div className="projectDetailsSection">
            <Projectdetails selectedProject={selectedProject} />
        </div>
     </div>

    </>
       
    );
}
export default Projectspage;