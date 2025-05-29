import './Aboutpage.css'
import Image from 'react-bootstrap/Image';

/*
1) About me section

2) Education and Skills
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
            </div>  
        </div>
        
        </>
      
    ); 
}

export default Aboutpage;