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
                <div className="logo-item">
                            <Image className="logoImage" src="github.png" alt="Git Logo" />
                            <div className="logo-label">GitHub</div>
                </div>
                 <div className="logo-item">
                            <Image className="logoImage" src="docker.png" alt="Docker Logo" />
                            <div className="logo-label">Docker</div>
                </div>
                 <div className="logo-item">
                            <Image className="logoImage" src="kubernetes.png" alt="Kubernetes Logo" />
                            <div className="logo-label">Kubernetes</div>
                </div>
                 <div className="logo-item">
                            <Image className="logoImage" src="maven.png" alt="Git Logo" />
                            <div className="logo-label">Maven</div>
                </div>
                <div className="logo-item">
                            <Image className="logoImage" src="springboot.png" alt="Git Logo" />
                            <div className="logo-label">SpringBoot</div>
                </div>
                 <div className="logo-item">
                            <Image className="logoImage" src="postgresql.png" alt="Git Logo" />
                            <div className="logo-label">PostgreSQL</div>
                </div>
                <div className="logo-item">
                            <Image className="logoImage" src="react.png" alt="Git Logo" />
                            <div className="logo-label">React</div>
                </div>             
            </div>

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
            </div>  
        </div>
        
        </>
      
    ); 
}

export default Aboutpage;