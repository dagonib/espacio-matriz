import React from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import logo_mys from '../../images/logos/mys.png'
import logo_onada from '../../images/logos/onada-feminista.png'

const Media = () => {
    return (
        <div className='media bg-dark py-5 px-3 mx-0'>
            <Container>
                <Row className='d-flex justify-content-center text-white mb-2 m-0'>
                    <TitleDeco className='text-center' text={'Mi presencia en los medios'}></TitleDeco>
                </Row>
                <Row className='d-flex flex-column flex-sm-row align-items-center justify-content-sm-center'>
                    <Image
                        className='img_logo my-2 my-sm-0 mx-sm-3'
                        src={logo_mys}
                    />
                    <Image 
                        className='img_logo my-2 my-sm-0 mx-sm-3'
                        src={logo_onada}
                    />
                </Row>
            </Container>
        </div>
    )
}

export default Media
