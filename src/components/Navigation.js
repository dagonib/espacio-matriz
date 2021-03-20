import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import { useLocation, withRouter } from 'react-router'
import logo from '../images/logo-lg.png'

import '../styles/navigation.styles.scss'

const Navigation = () => {
    const location = useLocation()

    console.log(location.pathname)
    return (
        <Navbar expand="md" bg="dark" variant="dark">
            <Container>
                {/*<!-- Navbar: Brand -->*/}
                <LinkContainer to='/inicio' activeClassName='no-class'>
                    <Navbar.Brand className="d-md-none">
                        <Image 
                            fluid
                            className="d-inline-block"
                            alt="logo"
                            src={logo}
                            width="150px"
                        />
                    </Navbar.Brand>
                </LinkContainer>

                {/*<!-- Navbar: Toggler -->*/}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler"/>

                {/*<!-- Navbar: Collapse -->*/}
                <Navbar.Collapse id="responsive-navbar-nav">

                    {/*<!-- Navbar: Navigation Left -->*/} 
                    <Nav className="mr-auto" activeKey={location.pathname} defaultActiveKey='/'>
                        <LinkContainer to='/inicio'>
                            <Nav.Link>Inicio</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/carolina'>
                            <Nav.Link>Carolina A.</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/el-proyecto'>
                            <Nav.Link>El Proyecto</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    {/*<!-- Navbar: Brand-->*/} 
                    <LinkContainer to='/inicio' activeClassName='no-class'>
                        <Navbar.Brand className="d-none d-md-flex">
                            <Image 
                                fluid
                                className="d-inline-block"
                                alt="logo"
                                src={logo}
                                width="150px"
                            />
                        </Navbar.Brand>
                    </LinkContainer>
                    {/*<!-- Navbar: Navigation Left -->*/} 
                    <Nav className="ml-auto" activeKey={location.pathname}>
                        <LinkContainer to='/ofrezco'>
                            <Nav.Link>Ofrezco</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/hablamos'>
                            <Nav.Link>Hablamos</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation