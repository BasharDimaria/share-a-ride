import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../styles/FormStyle.css';

const NavigationBar = () => {

    return (

        <Navbar bg="dark" fixed="top">
            
                <Navbar.Brand href="/home">Dela din resa</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/signin">Sign in</Nav.Link>
                    <Nav.Link href="/signup">Sign up</Nav.Link>
                </Nav>
            
        </Navbar>

    )
};

export default NavigationBar;
