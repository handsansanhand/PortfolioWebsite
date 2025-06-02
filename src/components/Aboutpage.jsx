import './Aboutpage.css'
import Image from 'react-bootstrap/Image';
import LogoItem from './Logoitem';
import { motion } from 'framer-motion';
/*
1) About me section

2) Education and Skills
Languages:
C, C++, Java, SQL, Scala, Python
Technologies:
Git, Docker, Kubernetes, Maven, Microservices, REST API’s, PostgreSQL, React
Methodologies:
Scrum, Agile, Test-Driven-Development, CI/CD
*/
function Aboutpage() {
    return (
        <>
        <div className='aboutMeContainer'> 
          <div className="aboutMeSection">
                         <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        >
                         <div className="aboutMeTitle">About Me</div>   
                        </motion.div>
                
                                                 <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        >
                <div className="aboutMeText">

                    <p>Hi, I’m Jack Wright, a recent Computer Science graduate passionate about building all things software. I enjoy working on both front-end and back-end technologies and love learning new tools and frameworks!</p>
                    <p>I’m currently seeking opportunities where I can contribute my skills, grow as a developer, and help create impactful software solutions. Feel free to get in touch - I’d love to connect!</p>
                </div>
                        </motion.div>

            </div>  
           <div className="rightSection">
                         <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        >
                         <div className="rightSectionTitle">Skills</div>    
                        </motion.div>
                            <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1 }}
                        >
                        <div className="containerTitle">Programming Languages</div>
                   <div className="skill-container">
                        <LogoItem src="c.png" alt="C Logo" label="C" />
                        <LogoItem src="ISO_C++_Logo.svg.png" alt="C++ Logo" label="C++" />
                        <LogoItem src="Java_programming_language_logo.svg.png" alt="Java Logo" label="Java" />
                        <LogoItem src="Sql_data_base_with_logo.svg.png" alt="SQL Logo" label="SQL" />
                        <LogoItem src="scala.png" alt="Scala Logo" label="Scala" />
                        <LogoItem src="Python-logo-notext.svg.png" alt="Python Logo" label="Python" />
                        <LogoItem src="JavaScript-Logo-300x169.png" alt="JavaScript Logo" label="JavaScript" />
                    </div>    
                        </motion.div>
                              <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.1 }}
                        >
                          <div className="containerTitle">Technologies</div>
            <div className="skill-container">
                        <LogoItem src="github.png" alt="GitHub Logo" label="GitHub" />
                        <LogoItem src="docker.png" alt="Docker Logo" label="Docker" />
                        <LogoItem src="kubernetes.png" alt="Kubernetes Logo" label="Kubernetes" />
                        <LogoItem src="maven.png" alt="Maven Logo" label="Maven" />
                        <LogoItem src="springboot.png" alt="SpringBoot Logo" label="SpringBoot" />
                        <LogoItem src="postgresql.png" alt="PostgreSQL Logo" label="PostgreSQL" />
                        <LogoItem src="react.png" alt="React Logo" label="React" />
            </div>  
                        </motion.div>
            
             <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.2 }}
                        >
                        <div className="containerTitle">Other Skills</div>
            <div className="skill-container">
                 <div className="logo-item">
                            <div className="logo-label">Microservices</div>
                </div>
                <div className="logo-item">
                            <div className="logo-label">RESTful APIs</div>
                </div>
                <div className="logo-item">
                            <div className="logo-label">Scrum/Agile Development</div>
                </div>
                <div className="logo-item">
                            <div className="logo-label">TDD</div>
                </div>
                <div className="logo-item">
                            <div className="logo-label">CI/CD</div>
                </div>
            </div>
                        </motion.div>
            
            </div>  
        </div>
        
        </>
      
    ); 
}

export default Aboutpage;