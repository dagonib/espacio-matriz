import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Iconos
import { FaExclamationCircle } from "react-icons/fa";

const Clarification = () => {
    return (
        <div className='clarification bg-dark py-5 px-3 mx-0'>
            <Container className='p-0'>
                <Row className='d-flex flex-row px-3'>
                    <Col xs={2} className='p-0'>
                        <FaExclamationCircle style={iconStyle} className='text-white align-self-start' /> 
                    </Col>
                    <Col xs={10} className='p-0'>
                        <p className='text-white ml-2 mb-0'>Espacio Matriz y su creadora, Carolina Ackermann, no proporcionan asesoramiento médico, diagnóstico o tratamiento. Si tiene cualquier duda, por favor, acuda a su centro médico o especialista.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const iconStyle = {
    fontSize: '3.5rem'
}

export default Clarification
