import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Iconos
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const NoteQuote = () => {
    return (
        <Row className='noteQuote bg-info py-5 mx-0'>
            <Container>
                <Row className='d-flex flex-column'>
                    <Col className='d-flex flex-row px-0'>
                        <FaQuoteLeft style={iconStyle} className='text-white align-self-start' /> 
                        <p className='text-white font-italic text-center px-4 mb-0'>
                            Seamos nosotras quienes construyamos los relatos sobre cómo habitamos el cuerpo cíclico y cómo queremos que esta experiencia biológica sea interpretada por nuestra cultura, en positivo, como una manifestación más de nuestro estado óptimo de salud, con recursos, con dignidad y sororidad.
                        </p>
                        <FaQuoteRight style={iconStyle} className='text-white align-self-end ml-auto' /> 
                    </Col>
                    <Col className='mt-4 px-0'>
                        <p className='text-white text-center mb-0'>
                            Carolina Ackermann, fragmento del discurso inaugural del 1er Encuentro de Cultura Menstrual, Barcelona 2019.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

const iconStyle = {
    fontSize: '4.5rem'
}

export default NoteQuote

