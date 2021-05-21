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
                            <p className='bg-info text-white font-weight-bold text-uppercase p-3'>curiosidad</p>
                            <p className='bg-info text-white font-weight-bold text-uppercase p-3'>Pasión</p>
                            <p className='bg-info text-white font-weight-bold text-uppercase p-3'>Movimiento</p>
                        </div>
                    </Col>
                    <Col className='d-flex flex-column align-items-lg-baseline justify-content-lg-end mt-5 mt-md-0 p-0' md={{ order: 'first'}}>
                        <TitleDeco text={'Caroluna'}></TitleDeco>
                        <h2 className="subtitle-text text-uppercase d-inline-block pb-4 mb-4">Soy mujer, soy lunar</h2>
                        <p className="note-text text-justify m-0">
                            Me despierto cada día buscando la curiosidad, interpretando mis propios deseos, identificando la belleza y gestando la mejor versión de mí misma. Soy mía y me comparto. Me reconozco auténtica para aceptarme en mis fases luminosas y oscuras, transitando la vida con consciencia.
                            Los sesgos de género en la medicina y la escasa educación sexual, me habían impedido que tuviera plena autonomía sobre mi salud ginecológica y hormonal. Pero ya desperté. Cada día abro la ventana al conocimiento para saber más. Mi perspectiva aúnan el amor y la sana indignación para profundizar en mí y en mi misión de acompañar en el despertar.
                        </p>
                        <p className="note-text text-justify mt-3 m-0">
                            ¡Mujeres por el bienestar del cuerpo, del bienestar común y de la Tierra!
                        </p>    
                        <Button variant='primary' type='submit' className='rounded-0 text-uppercase mt-3'>
                            Conóceme
                        </Button> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe
