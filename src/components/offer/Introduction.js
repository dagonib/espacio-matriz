import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'
import img_presentation from '../../images/homescreen/img1.jpg'

const Introduction = () => {
    return (
        <Row className='introduction bg-info py-5 mx-0'>
            <Container className='d-flex flex-column-reverse flex-md-row'>
                <Col className='align-self-md-end flex-end text-white mr-md-3 px-0'>
                    <TitleDeco text={'Adiós incomprensión'}></TitleDeco>
                    <p className="note-text text-justify m-0">Lo que ofrezco está en constante adaptación, evolución y proceso creativo según las necesidades propias y colectivas. Me concentro en dos etapas vitales: la etapa cíclica en la que se ovula y menstrúa y la etapa climatérica en la que se viven la perimenopausia (años previos a la retirada de la menstruación), la menopausia (fin de la menstruación) y la postmenopausia (años de adaptación a la nueva situación hormonal).</p>
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

export default Introduction
