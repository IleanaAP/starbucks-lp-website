import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './styleNavBar.css';

export const NavBar = () => {
  return (
    <>
      {/*Bootstrap navbar*/}

      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home">
            <div>
            <a href="#home" class="navbar-brand" >
            <img src="/logo_starbucks.png" class="d-inline-block align-top" alt="Starbucks coffee logo"></img>
            </a>
            </div>
            

            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" class="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="margin-content">Home</Nav.Link>
              <Nav.Link href="#link" className="margin-content">Menu</Nav.Link>
              <Nav.Link href="#link" className="margin-content">What's New</Nav.Link>
              <Nav.Link href="#link" className="margin-content">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
