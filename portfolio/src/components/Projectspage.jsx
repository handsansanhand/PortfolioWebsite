import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';

function Projectspage() {
          const navigate = useNavigate();
return (
    <>
     <Button variant="primary" className="mt-3" onClick={() => {
            navigate("/");
        }}>
                Click me!
        </Button>
    </>
       
    );
}
export default Projectspage;