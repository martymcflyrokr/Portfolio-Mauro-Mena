import '../navbar/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'




const NavBar = (()=>{

    return (
       <>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">MM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    <Nav.Link href="#features">Sobre mí</Nav.Link>
                        <Nav.Link href="#expertise">Experiencia</Nav.Link>
                        <Nav.Link href="#proyects">Proyectos</Nav.Link>
                        <Nav.Link href="#contactme">Contactame</Nav.Link>
                        <Button>RESUME</Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </>
    )
})

export default NavBar

