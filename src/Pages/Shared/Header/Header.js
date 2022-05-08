import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Wholesale Dealers
                </Navbar.Brand>
                <Nav className="m-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="login">Login</Nav.Link>
                    <Nav.Link as={Link} to="inventory">Inventory</Nav.Link>
                    <Nav.Link as={Link} to="items">Items</Nav.Link>
                    <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;