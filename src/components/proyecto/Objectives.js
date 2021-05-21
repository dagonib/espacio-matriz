import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Objectives = () => {
    return (
        <Row className='objectives bg-secondary py-5 mx-0'>
            <Container>
                <Row className='d-flex flex-column align-items-center m-0'>
                    <h1 className="header-text-box-title text-uppercase mb-3">Objetivos Principales</h1>
                </Row>
                <Row xs={2} md={4}>
                    <Col className='imgbox py-3 py-md-3'>
                        <h1 className='numeration text-primary text-center m-0'>01</h1>
                        <p className='text-center m-0'>Denunciar los sesgos de género en la investigación y en la atención médico-sanitaria.</p>
                    </Col>
                    <Col className='imgbox py-3 py-md-3'>
                        <h1 className='numeration text-primary text-center m-0'>02</h1>
                        <p className='text-center m-0'>Alentar a la autoconfianza, la autonomía y la toma de conciencia sobre las etapas biológicas que comprenden la menarquía, la etapa cíclica y el climaterio/menopausia.</p>
                    </Col>
                    <Col className='imgbox py-3 py-md-3'>
                        <h1 className='numeration text-primary text-center m-0'>03</h1>
                        <p className='text-center m-0'>Ofrecer mis conocimientos a colectivos, instituciones, asociaciones, etc.</p>
                    </Col>
                    <Col className='imgbox py-3 py-md-3'>
                        <h1 className='numeration text-primary text-center m-0'>04</h1>
                        <p className='text-center m-0'>Compartir información libre del sesgo de género que acompaña a las ciencias de la salud.</p>
                    </Col>
                    <Col className='imgbox py-3 py-md-3'>
                        <h1 className='numeration text-primary text-center m-0'>05</h1>
                        <p className='text-center m-0'>Divulgar sobre los recursos para el bienestar más allá de los intereses de la industria de lo “femenino”.</p>
                    </Col>
                    <Col className='imgbox py-1 py-md-3'>
                        <h1 className='numeration text-primary text-center m-0'>06</h1>
                        <p className='text-center m-0'>Crear red entre divulgadoras, profesionales de la salud, terapeutas y activistas.</p>
                    </Col>
                    <Col className='imgbox py-1 py-md-3'>
                        <h1 className='numeration text-primary text-center m-0'>07</h1>
                        <p className='text-center m-0'>Colaborar con medios de comunicación escritos y radiofónicos.</p>
                    </Col>
                    <Col className='imgbox py-1 py-md-3'>
                        <h1 className='numeration text-primary text-center m-0'>08</h1>
                        <p className='text-center m-0'>Acompañar en la reflexión e incorporación de conocimientos sobre sexualidad, ciclo menstrual, anatomía genital y climaterio.</p>
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

export default Objectives
