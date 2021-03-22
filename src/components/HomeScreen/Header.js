import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import '../../styles/screens/homescreen/header.styles.scss'
import imgsm from '../../images/homescreen/instagram-2.png'

const Header = () => {
    return (
        <Row className='header-backgound-image d-flex justify-content-center p-3 m-0'>
            <Container className='header-secondary-background-image position-relative d-flex align-items-center m-0 p-0'>
                <Col xs={12} sm={10} md={6} lg={4} className='header-text-box bg-dark text-white p-5'>           
                    <h1 className="header-text-box-title mb-3">Adéntrate en el bienestar</h1>
                    <h2 className="header-text-box-subtitle text-uppercase pb-4 mb-4">Te acompaño</h2>
                    <p className="header-text-box-note text-justify">
                        Soy Carolina Ackermann. Te doy la bienvenida a mi Espacio Matriz.
                        En mi trayectoria y maneras de comunicar, encontrarás las semillas que contienen la información necesaria para vivir desde la menarquía a la menopausia con consciencia, bienestar y gozo. 
                        ¡Bienvenida a mi Espacio!
                    </p>             
                </Col>

                <Col className='header-decorative-image-box d-none d-md-flex justify-content-end p-0' sm={4} md={6} lg={8}>   
                    <Image 
                        className='header-decorative-image'
                        src={imgsm}
                    />
                </Col>  
            </Container>
        </Row> 
    )
}

export default Header