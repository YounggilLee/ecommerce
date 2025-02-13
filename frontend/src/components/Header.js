import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

import { Container, Navbar, Nav } from 'react-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>
                        <Nav className="mr-auto">

                        <LinkContainer to='/cart'>  
                            <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        </LinkContainer>  

                        <LinkContainer to='/login'>  
                            <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                        </LinkContainer>  
                        
                    </Nav>
                </Container>    
            </Navbar>            
        </header>
    )
}

export default Header
