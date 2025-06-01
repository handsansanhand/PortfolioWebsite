import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import './Projectlist.css'
import Projectlist from './Projectlist';
import Projectdetails from './Projectdetails';
import { useState } from 'react';
import { motion } from 'framer-motion';
function Projectspage() {
          const [selectedProject, setSelectedProject] = useState(null);
return (
    <>
    <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
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
</motion.div>
     

    </>
       
    );
}
export default Projectspage;