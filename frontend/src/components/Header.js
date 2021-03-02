import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">ProShop</Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        <Nav.Link href="/Login"><i className="fas fa-user"></i>Login</Nav.Link>
                    </Nav>
                </Container>    
            </Navbar>            
        </header>
    )
}

export default Header
