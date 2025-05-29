
import { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import './Homepage.css'
function Homepage() {
      const navigate = useNavigate();
    return (
    <>
         <div className="homepageContainer">
            <div className="textSection">
                <h1>Hi there!</h1>
                 <p>Welcome to my portfolio - explore my projects and feel free to reach out!</p>
            </div>
            <div className="imageSection">
                <Image src="cat.jpg" roundedCircle className="roundedImage"/>
                <h2 className="mt-2">Jack Wright</h2>
                <h3 className="mt-1">Software Engineer</h3>
            </div>
      
    </div>
    </>
    );

}
export default Homepage;