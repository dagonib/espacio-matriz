import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import img_presentation from '../../images/homescreen/proyect.png'

const Climaterica = () => {
    return (
        <Row className='climaterica bg-secondary m-0'>
            <Container>
                <Row className='d-flex flex-column flex-md-row-reverse py-5 m-0'>
                    <Col className='imgbox d-flex align-items-end align-items-md-center p-0 ml-md-5 pb-lg-0 ml-lg-5'>                  
                        <Image
                            src={img_presentation}
                        />
                    </Col>
                    <Col className='d-flex flex-column align-items-lg-baseline justify-content-lg-end mt-5 mt-md-0 p-0'>
                        <TitleDeco text={'Vívete'}></TitleDeco>
                        <h2 className="subtitle-text text-uppercase d-inline-block pb-4 mb-4">Etapa Climatérica</h2>
                        <p className="note-text text-justify m-0">
                            Vívete durante la etapa del climaterio (perimenopausia-menopausia-postmenopausia) con información y recursos que puedan enriquecer todos los aspectos de una vida que merece ser vivida con plenitud y reconocimiento sociocultural.
                        </p>
                        <p className="note-text text-justify mt-3 m-0">
                            ¡Vívete! Y descubre en ti la energía vital y poderosa, que hace aflorar tu Yo más auténtico en la “Segunda Primavera” según la llaman desde la medicina tradicional china.
                        </p>    
                        <Button variant='primary' type='submit' className='rounded-0 text-uppercase mt-3'>
                            Recursos
                        </Button> 
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

export default Climaterica
