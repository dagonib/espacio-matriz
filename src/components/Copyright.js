import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Copyright = () => {
    return (
        <Container className="bg-dark mw-100 text-white">
            <Row className="bg-success">
                <Col className='text-center p-2'>
                    Design by Slash 2021
                </Col>
            </Row>
        </Container>
    )
}

export default Copyright
