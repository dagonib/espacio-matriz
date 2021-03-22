import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Row, Col, Nav, Image } from 'react-bootstrap'
import TitleDeco from './TitleDeco'
import RRSS from './RRSS'

import img1 from '../images/footer/instagram-1.png'
import img2 from '../images/footer/instagram-2.png'
import img3 from '../images/footer/instagram-3.png'
import img4 from '../images/footer/instagram-4.png'
import img5 from '../images/footer/instagram-5.png'
import img6 from '../images/footer/instagram-6.png'

const Footer = () => {

    return (
        <footer className="mt-5">
            <Row className="bg-dark m-0 y-5">
                <Container className="py-5 px-4 px-sm-0  text-white">
                    {/** Instagram o carteles */}
                    <Row className='m-0'>
                        <Col xs={4} md={2} className='p-1'>
                            <Image 
                                alt="logo"
                                src={img1}
                                width="100%"
                            />
                        </Col>
                        <Col xs={4} md={2} className='p-1'>
                            <Image 
                                alt="logo"
                                src={img2}
                                width="100%"
                            />
                        </Col>
                        <Col xs={4} md={2} className='p-1'>
                            <Image 
                                alt="logo"
                                src={img3}
                                width="100%"
                            />
                        </Col>
                        <Col xs={4} md={2} className='p-1'>
                            <Image 
                                alt="logo"
                                src={img4}
                                width="100%"
                            />
                        </Col>
                        <Col xs={4} md={2} className='p-1'>
                            <Image 
                                alt="logo"
                                src={img5}
                                width="100%"
                            />
                        </Col>
                        <Col xs={4} md={2} className='p-1'>
                            <Image 
                                alt="logo"
                                src={img6}
                                width="100%"
                            />
                        </Col>
                    </Row>

                    {/** Información adicional */}
                    <Row className='d-flex align-items-center m-0 mt-5'>
                        {/*<!-- Carolina A. -->*/} 
                        <Col md={4} className="text-center p-0 mb-4">
                            <TitleDeco text={'Carolina Ackermann'}></TitleDeco>
                            <p className="m-0">Divulgadora y coordinadora de eventos relacionados con la Cultura Menstrual</p>
                        </Col>
                        {/*<!-- RRSS -->*/} 
                        <Col md={4} className="text-center p-0 mb-4">
                            <TitleDeco text={'Socializa'}></TitleDeco>
                            <RRSS align='d-flex justify-content-center text-white m-0' size='25' />
                        </Col>
                        {/*<!-- Navigation -->*/} 
                        <Col md={4} className="text-center p-0">
                            <TitleDeco text={'Navegación'}></TitleDeco>
                            <Nav className="d-flex flex-column">
                                <LinkContainer to='/inicio'>
                                    <Nav.Link>Inicio</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/carolina'>
                                    <Nav.Link>Carolina A.</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/el-proyecto'>
                                    <Nav.Link>El Proyecto</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/ofrezco'>
                                    <Nav.Link>Ofrezco</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/hablamos'>
                                    <Nav.Link>Hablamos</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </footer>
    )
}

export default Footer