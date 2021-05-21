import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

const Ebook = () => {
    return (
        <Row className='ebook bg-info py-5 px-3 mx-0'>
            <Container className='p-0'>
                <Row className='d-flex flex-column flex-sm-row align-items-start align-items-sm-end text-white px-3'>
                    <Col xs={12} sm={8} className='p-0'>
                        <TitleDeco text={'Ebook ¿Qué dice tu vulva?'}></TitleDeco>
                        <p className='mb-0 text-justify'>Me apetece mucho compartirte de manera gratuita, el Ebook que he creado: “¿Qué dice tu vulva?”. Un material divulgativo con información positiva sobre la vulva. "Te invito a mirar lo que nos han enseñado a tapar". ¡Que vivan tu vulva y la mía!</p>
                    </Col>
                    <Col xs={12} sm={4} className='d-flex justify-content-end p-0'>
                        <Button variant='primary' type='submit' className='rounded-0 text-uppercase mt-3'>
                            Lo Quiero
                        </Button> 
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

export default Ebook
