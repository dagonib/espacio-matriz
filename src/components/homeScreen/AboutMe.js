import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import '../../styles/screens/homescreen/about-me.styles.scss'

const AboutMe = () => {
    return (
        <div className='about-me bg-secondary m-0'>
            <Container>
                <Row className='d-flex flex-column flex-md-row py-5 m-0'>
                    <Col className='aboutme-box-image d-flex align-items-end align-items-md-center p-0 ml-md-5 pb-lg-0 ml-lg-5' md={{ order: 'last'}}>                  
                        <div className='d-flex flex-column w-100 w-md-50'>
                            <p className='bg-info text-white font-weight-bold text-uppercase p-3'>divulgar</p>
                            <p className='bg-info text-white font-weight-bold text-uppercase p-3'>coordinar</p>
                            <p className='bg-info text-white font-weight-bold text-uppercase p-3'>investigar</p>
                            <p className='bg-info text-white font-weight-bold text-uppercase p-3'>crear</p>
                        </div>
                    </Col>
                    <Col className='d-flex flex-column align-items-lg-baseline justify-content-lg-end mt-5 mt-md-0 p-0' md={{ order: 'first'}}>
                        <TitleDeco text={'Espacio Matriz'}></TitleDeco>
                        <h2 className="subtitle-text text-uppercase d-inline-block pb-4 mb-4">Ejes de acción</h2>
                        <p className="note-text text-justify font-weight-bold m-0">
                            Divulgar
                        </p>
                        <p className="note-text text-justify mt-1 m-0">
                            David Información integral sobre el ciclo menstrual, el climaterio, la anatomía genital, menstruación sostenible, ginecología autogestiva.
                        </p>  
                        <p className="note-text text-justify font-weight-bold mt-3 m-0">
                            Coordinar
                        </p>
                        <p className="note-text text-justify mt-1 m-0">
                            Eventos, charlas, talleres, encuentros entre mujeres activistas, feministas, divulgadoras.
                        </p>    
                        <p className="note-text text-justify font-weight-bold mt-3 m-0">
                            Investigar
                        </p>
                        <p className="note-text text-justify mt-1 m-0">
                            Generar alianzas para investigar sobre los diversos aspectos que influyen en un ciclo menstrual o climaterio saludable.
                        </p>  
                        <p className="note-text text-justify font-weight-bold mt-3 m-0">
                            Crear
                        </p>
                        <p className="note-text text-justify mt-1 m-0">
                            Textos, artículos y material educativo para las redes, medios de comunicación, mi comunidad o la Asociación La Vida en Rojo.
                        </p>        
                        <Button variant='primary' type='submit' className='rounded-0 text-uppercase mt-3'>
                            Actividades
                        </Button> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe
