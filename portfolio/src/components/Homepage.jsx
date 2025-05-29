
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
                <h1 className="title">Hi there!</h1>
                 <p className="subtitle">Welcome to my portfolio - explore my projects and feel free to reach out!</p>
            </div>
            <div className="imageSection">
                <Image src="cat.jpg" roundedCircle className="roundedImage"/>
                <h2 className="myName">Jack Wright</h2>
                <h3 className="myTitle">Software Engineer</h3>
            </div>
      
    </div>
    </>
    );

}
export default Homepage;