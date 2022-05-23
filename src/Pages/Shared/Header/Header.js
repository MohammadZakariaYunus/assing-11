import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
            <Container>
                <Navbar.Brand href="#home">Wholesale Dealers</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="inventory">Inventory</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to="addItem">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="manage">Manage Items</Nav.Link>
                                <Nav.Link as={Link} to="myItem">My Items</Nav.Link>

                            </>
                        }
                        {
                            user ?

                                <Nav.Link onClick={handleSignOut}>
                                    Sign Out
                                </Nav.Link>
                                :
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <Navbar collapseOnSelect bg="dark" sticky='top' variant="dark">
        //     <Container>
        //         <Navbar.Brand href="#home">Wholesale Dealers
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="m-auto">
        //                 <Nav.Link as={Link} to="/">Home</Nav.Link>
        //                 <Nav.Link as={Link} to="inventory">Inventory</Nav.Link>
        //                 <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
        //                 {
        //                     user && <>
        //                         <Nav.Link as={Link} to="addItem">Add Item</Nav.Link>
        //                         <Nav.Link as={Link} to="manage">Manage Items</Nav.Link>
        //                         <Nav.Link as={Link} to="myItem">My Items</Nav.Link>

        //                     </>
        //                 }
        //                 {
        //                     user ?

        //                         <Nav.Link onClick={handleSignOut}>
        //                             Sign Out
        //                         </Nav.Link>
        //                         :
        //                         <Nav.Link as={Link} to="login">
        //                             Login
        //                         </Nav.Link>
        //                 }
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar >

    );
};

export default Header;