import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Contactdetails from './Contactdetails';

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
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutpage">About</Nav.Link>
            <Nav.Link as={Link} to="/projectspage">Projects</Nav.Link>
          </Nav>
            <Contactdetails/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    ); 
}

export default Header;