import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'
import img_presentation from '../../images/homescreen/proyect.png'

const Purpose = () => {
    return (
        <Row className='purpose bg-dark py-5 mx-0'>
            <Container className='d-flex flex-column-reverse flex-md-row'>
                <Col className='align-self-md-end flex-end text-white mr-md-3 px-0'>
                    <h1 className="header-text-box-title text-uppercase mb-3">El Proyecto</h1>
                    <TitleDeco text={'Dispersando semillas de conocimientos'}></TitleDeco>
                    <p className="note-text text-justify m-0">Mi propósito y misión desde el proyecto de Espacio Matriz, es el divulgar información sin sesgos sexistas ni tabúes sobre el proceso fisiológico de menstruar o dejar de hacerlo, con el fin de remover de nuestra cultura occidental los miedos, estereotipos y creencias limitantes sobre la experiencia cíclica y la experiencia climatérica.</p>
                </Col>
                <Col className='imgbox text-white ml-md-3 px-0'>
                    <Image
                        src={img_presentation}
                    >

                    </Image>
                </Col>
            </Container>
        </Row>
    )
}

export default Purpose
