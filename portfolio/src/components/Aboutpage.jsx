import './Aboutpage.css'
import Image from 'react-bootstrap/Image';

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
                <div className="aboutMeTitle">About Me</div>
                <div className="aboutMeText">
                    <p>Hi, I’m Jack Wright, a recent Computer Science graduate passionate about building all things software. I enjoy working on both front-end and back-end technologies and love learning new tools and frameworks!</p>
                    <p>I’m currently seeking opportunities where I can contribute my skills, grow as a developer, and help create impactful software solutions. Feel free to get in touch - I’d love to connect!</p>
                </div>
            </div>  
           <div className="rightSection">
                <div className="rightSectionTitle">Skills</div>
                 <div className="containerTitle">Programming Languages</div>
                    <div className="skill-container">
                         <div className="logo-item">
                            <Image className="logoImage" src="c.png" alt="C Logo" />
                            <div className="logo-label">C</div>
                        </div>
                        <div className="logo-item">
                            <Image className="logoImage" src="ISO_C++_Logo.svg.png" alt="C++ Logo" />
                            <div className="logo-label">C++</div>
                        </div>
                        <div className="logo-item">
                            <Image className="logoImage" src="Java_programming_language_logo.svg.png" alt="Java Logo" />
                            <div className="logo-label">Java</div>
                        </div>
                        <div className="logo-item">
                            <Image className="logoImage" src="Sql_data_base_with_logo.svg.png" alt="SQL Logo" />
                            <div className="logo-label">SQL</div>
                        </div>
                        <div className="logo-item">
                            <Image className="logoImage" src="scala.png" alt="Scala Logo" />
                            <div className="logo-label">Scala</div>
                        </div>
                        <div className="logo-item">
                            <Image className="logoImage" src="Python-logo-notext.svg.png" alt="Python Logo" />
                            <div className="logo-label">Python</div>
                        </div>
                        <div className="logo-item">
                            <Image className="logoImage" src="JavaScript-Logo-300x169.png" alt="JS Logo" />
                            <div className="logo-label">JavaScript</div>
                        </div>
                        
            </div>
            <div className="containerTitle">Technologies</div>
            <div className="skill-container">
                 <p>Git, Docker, Kubernetes, Maven, Microservices, REST API’s, PostgreSQL, React</p>
            </div>

            <div className="containerTitle">Methodologies</div>
            <div className="skill-container">
                <p>Scrum, Agile, Test-Driven-Development, CI/CD</p>
            </div>
            </div>  
        </div>
        
        </>
      
    ); 
}

export default Aboutpage;