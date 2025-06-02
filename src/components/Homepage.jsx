
import { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { motion } from 'framer-motion';
import './Homepage.css'
function Homepage() {
      const navigate = useNavigate();
    return (
    <>
         <div className="homepageContainer">
            <div className="textSection">
                      <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        >
                <h1 className="title">Hi there!</h1>
                </motion.div>
                <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        >
                       <div className="subtitle">
                        <p>Welcome to my portfolio</p>   
                        <p>Explore my projects and feel free to reach out!</p>   
                        </div>     
                         
                        </motion.div>
                 
            </div>
            <div className="imageSection">
                <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            <Image src="/PortfolioWebsite/assets/picOfMe.jpg" roundedCircle className="roundedImage"/> 
                        </motion.div>
                            <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        >
                                         <h2 className="myName">Jack Wright</h2>
                <h3 className="myTitle">Software Engineer</h3>   
                        </motion.div>

            </div>
      
    </div>
    </>
    );

}
export default Homepage;