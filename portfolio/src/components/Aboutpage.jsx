import './Aboutpage.css'
import Image from 'react-bootstrap/Image';
import LogoItem from './Logoitem';
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
                        <LogoItem src="c.png" alt="C Logo" label="C" />
                        <LogoItem src="ISO_C++_Logo.svg.png" alt="C++ Logo" label="C++" />
                        <LogoItem src="Java_programming_language_logo.svg.png" alt="Java Logo" label="Java" />
                        <LogoItem src="Sql_data_base_with_logo.svg.png" alt="SQL Logo" label="SQL" />
                        <LogoItem src="scala.png" alt="Scala Logo" label="Scala" />
                        <LogoItem src="Python-logo-notext.svg.png" alt="Python Logo" label="Python" />
                        <LogoItem src="JavaScript-Logo-300x169.png" alt="JavaScript Logo" label="JavaScript" />
                    </div>
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