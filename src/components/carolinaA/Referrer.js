import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import img_yayoherrero from '../../images/referentes/yayo.herrero.png'
import img_annafreixas from '../../images/referentes/anna.freixas.jpeg'
import img_carmevalls from '../../images/referentes/carme.valls.png'
import img_coralherrera from '../../images/referentes/coral.herrera.png'
import img_erikairusta from '../../images/referentes/erika.irusta.jpg'
import img_lorena from '../../images/referentes/lorena.jpg'
import img_marinagarces from '../../images/referentes/marina.garces.png'
import img_pastorafiligrana from '../../images/referentes/pastora.filigrana.png'

const Referrer = () => {
    return (
        <Row className='referrer bg-secondary py-5 mx-0'>
            <Container>
                <Row className='d-flex flex-column align-items-center m-0'>
                    <TitleDeco className='text-center' text={'Mis referentes'}></TitleDeco>
                    <p>Te presento a algunas de mis referentes, mujeres inteligentes y sabias que estimulan mi pensamiento crítico.</p>
                </Row>
                <Row xs={2} md={4}>
                    <Col className='imgbox py-1 py-md-3'>
                        <Image 
                            src={img_yayoherrero}
                        />
                    </Col>
                    <Col className='imgbox py-1 py-md-3'>
                        <Image 
                            src={img_annafreixas}
                        />
                    </Col>
                    <Col className='imgbox py-1 py-md-3'>
                        <Image 
                            src={img_carmevalls}
                        />
                    </Col>
                    <Col className='imgbox py-1 py-md-3'>
                        <Image 
                            src={img_coralherrera}
                        />
                    </Col>
                    <Col className='imgbox py-1 py-md-3'>
                        <Image 
                            src={img_erikairusta}
                        />
                    </Col>
                    <Col className='imgbox py-1 py-md-3'>
                        <Image 
                            src={img_lorena}
                        />
                    </Col>
                    <Col className='imgbox py-1 py-md-3'>
                        <Image 
                            src={img_marinagarces}
                        />
                    </Col>
                    <Col className='imgbox py-1 py-md-3'>
                        <Image 
                            src={img_pastorafiligrana}
                        />
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}

export default Referrer
