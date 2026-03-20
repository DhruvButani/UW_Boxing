import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

export default function BoxingNavbar() {
    return <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Container>
            <Navbar.Brand as={Link} to="/">
                UW Boxing Club
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="boxing-navbar-nav" />
            <Navbar.Collapse id="boxing-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
                    <Nav.Link as={Link} to="/info">Club Info</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}
