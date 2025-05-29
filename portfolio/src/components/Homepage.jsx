
import { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';

function Homepage() {
      const navigate = useNavigate();
    return (
    <>
        <Fragment>
            <h1>List</h1>
            <ul className="list-group">
                <li className="list-group-item">list 1</li>
            </ul>
        </Fragment>
        <Button variant="primary" className="mt-3" onClick={() => {
            navigate("/contactpage");
        }}>
                Click me!
        </Button>
    </>
    );

}
export default Homepage;