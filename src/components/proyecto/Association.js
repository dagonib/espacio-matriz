import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

const Association = () => {
    return (
        <Row className='association bg-info text-white py-5 m-0'>
           <Container>
               <Row className='d-flex flex-column align-items-center '>
                    <h2 className="subtitle-text text-uppercase d-inline-block pb-4 mb-4">Asociación de Cultura Menstrual</h2>
               </Row>
               <Row className='d-flex flex-column align-items-left '>
                    <TitleDeco className='text-center' text={'La Vida en Rojo'}></TitleDeco>
               </Row>
               <Row className='d-flex flex-column flex-md-row'>
                   <Col className='mr-md-2 pl-md-0'> 
                        <p className='mb-0'>Mi proyecto se suma al movimiento histórico contemporáneo por una nueva Cultura menstrual y cultura del climaterio integral, inclusiva, sostenible y feminista. Con este fin, en el año 2021 Carolina Ackermann, Ma. Victoria López Benito y Ana Luisa Meza, fundan la primera Asociación de Cultura menstrual en Cataluña, La vida en Rojo.</p>
                   </Col>
                   <Col className='ml-md-2'>
                        <p className='mb-0'>La asociación busca crear comunidad entre entidades y profesionales dedicadas a la salud y la educación menstrual. Participa de activismos y campañas por la justicia y dignidad menstrual. Elabora documentos de investigación y teje redes entre profesionales dedicadas a la cultural menstrual, tanto en el ámbito estatal, como el latinoamericano. La Asociación cuenta con un evento anual: Los “Encuentros de Cultura Menstrual” (EnCuMe).</p>
                   </Col>
               </Row>
               <Row className='d-block align-items-left mt-3'>
                    <Button variant='primary' type='submit' className='rounded-0 text-uppercase mr-3'>
                        Visitar
                    </Button>   
               </Row>
           </Container>
        </Row>
    )
}

export default Association
