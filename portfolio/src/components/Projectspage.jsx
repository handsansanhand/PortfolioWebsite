import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import './Projectlist.css'
import Projectlist from './Projectlist';
import Projectdetails from './Projectdetails';
function Projectspage() {
          const navigate = useNavigate();
return (
    <>
     <div className="projectsContainer">
        <div className="projectListSection">
             <Projectlist />
        </div>
           
        <div className="projectDetailsSection">
            <Projectdetails />
        </div>
     </div>

    </>
       
    );
}
export default Projectspage;