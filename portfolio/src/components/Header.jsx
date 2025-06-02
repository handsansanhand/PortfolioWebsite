import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Contactdetails from './Contactdetails';
import { NavLink } from 'react-router-dom';

/*header for the portfolio page, should have a link to
Home : the homepage
About : details about myself
Projects : my projects

Also:
Contact details in the far right
*/
function Header() {
    return (
        <Navbar bg="light" expand="lg" className="py-3">
      <Container fluid> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-4">
            <Nav.Link 
                    as={NavLink} 
                    to="/" 
                    style={({ isActive }) => ({
                    fontSize: '28px', 
                    fontWeight: '800',
                    color: isActive ? '#73628A' : 'inherit',
                    textDecoration: 'none'
            })}
            >
            Home
            </Nav.Link>
            <Nav.Link 
                as={NavLink} 
                to="/aboutpage" 
                style={({ isActive }) => ({
                    fontSize: '28px', 
                    fontWeight: '800',
                    color: isActive ? '#73628A' : 'inherit',
                    textDecoration: 'none'
                })}
                >
                About
                </Nav.Link>
            <Nav.Link 
                as={NavLink} 
                to="/projectspage" 
                style={({ isActive }) => ({
                    fontSize: '28px', 
                    fontWeight: '800',
                    color: isActive ? '#73628A' : 'inherit',
                    textDecoration: 'none'
                })}
                >
                Projects
            </Nav.Link>
          </Nav>
            <Contactdetails/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    ); 
}

export default Header;