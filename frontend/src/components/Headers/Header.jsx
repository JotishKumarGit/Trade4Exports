// components/Header.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button, Form, FormControl } from 'react-bootstrap';
import './Headcss.css';

const Header = () => {
    return (
        <>
            {/* Top Red Navbar */}
            <Navbar expand="lg" className="top-navbar bg-danger text-white py-2" >
                <Container fluid className="justify-content-end">
                    <Nav className="d-flex flex-wrap align-items-center text-white gap-3 top-menu">
                        <span className="divider">Welcome! Login</span>
                        <span className="divider">Join Free</span>
                        <span className="divider">Support: 011-48053133</span>
                        <span className="divider">support@trade4export.com</span>

                        <NavDropdown title="For Buyer" className="nav-dropdown" menuVariant="dark" >
                            <NavDropdown.Item href="#">Post Buy Requirement</NavDropdown.Item>
                            <NavDropdown.Item href="#">Search Sellers</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="For Seller" className="nav-dropdown" menuVariant="dark">
                            <NavDropdown.Item href="#">Post Sell Requirement</NavDropdown.Item>
                            <NavDropdown.Item href="#">Manage Products</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="For Help" className="nav-dropdown" menuVariant="dark" >
                            <NavDropdown.Item href="#">FAQs</NavDropdown.Item>
                            <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

            {/* Bottom White Navbar */}
            <Navbar expand="lg" className="bottom-navbar bg-white py-3 shadow-sm">
                <Container fluid className="d-flex flex-wrap justify-content-between align-items-center">
                    {/* Logo */}
                    <Navbar.Brand href="#" className="fw-bold text-primary fs-4">
                        TRADE<span className="text-danger">4</span>EXPORT
                    </Navbar.Brand>

                    {/* Search Bar (centered) */}
                    <Form className="d-flex mx-auto search-container w-50">
                        <FormControl
                            type="search"
                            placeholder="Search Product / Service"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>

                    {/* Buttons (right) */}
                    <div className="d-flex gap-2 mt-2 mt-lg-0">
                        <Button variant="primary">Post Buy Requirement</Button>
                        <Button variant="danger">Post Sell Requirement</Button>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
