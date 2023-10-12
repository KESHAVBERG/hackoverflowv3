import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import './NavigationBar.css'
function Navigationbar(){
    return (
    <>

      <Navbar collapseOnSelect expand="lg">
      <Container>
      <Navbar.Brand href="#home"><img alt='logo' id='nav-img' src={require('../../images/logo_sym.png')}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="box">
            <Nav.Link href="/#home">Home</Nav.Link>
            <Nav.Link href="/#about-us">About Us</Nav.Link>
            <Nav.Link href="/#domains">Domains</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link> <Link to='/gallery' style={{textDecoration:"none",color:"inherit"}}>Gallery</Link> </Nav.Link>
            <Nav.Link href="/#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    );
}

export default Navigationbar