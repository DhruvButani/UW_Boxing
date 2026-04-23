import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router";

const navLinks = [
    { to: "/",        label: "Home"     },
    { to: "/schedule",label: "Schedule" },
    { to: "/gallery", label: "Gallery"  },
    { to: "/info",    label: "Officers" },
    { to: "/contact", label: "Contact"  },
];

export default function BoxingNavbar() {
    const location = useLocation();
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="./images/Spring_2024_UW_Boxing_Logo.jpg"
                        alt="UW Boxing Club Logo"
                        height="68"
                        className="d-inline-block align-middle me-2 rounded"
                    />
                    UW Boxing Club
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="boxing-navbar-nav" />
                <Navbar.Collapse id="boxing-navbar-nav">
                    <Nav className="ms-auto align-items-center gap-1">
                        {navLinks.map(l => (
                            <Nav.Link
                                key={l.to}
                                as={Link}
                                to={l.to}
                                className={location.pathname === l.to ? "nav-active" : ""}
                            >
                                {l.label}
                            </Nav.Link>
                        ))}
                        <Nav.Link as={Link} to="/join" className="nav-join-btn">
                            Join Now
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
