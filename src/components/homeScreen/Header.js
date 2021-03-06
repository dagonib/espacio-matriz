import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import '../../styles/screens/homescreen/header.styles.scss'
import imgsm from '../../images/homescreen/img2.jpg'

const Header = () => {
    return (
        <Row className='header-backgound-image d-flex justify-content-center p-3 m-0'>
            <Container className='header-secondary-background-image position-relative d-flex align-items-center m-0 p-0'>
                <Col xs={12} sm={10} md={6} lg={4} className='header-text-box bg-info text-white p-4 p-sm-5'>  
                    <TitleDeco text={'Ponte cómoda, vas a conocerte'}></TitleDeco>  
                    <h2 className="subtitle-text text-uppercase pb-4 mb-4">Te doy la llave</h2>
                    <p className="note-text text-justify m-0">
                    A las mujeres nos falta mucha información para entender nuestra anatomía genital, los signos y síntomas del ciclo menstrual y sobre la llegada de la menopausia. 
                    La información es la llave de la autonomía personal para la salud y el bienestar. Quiero entregártela.
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