import React from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import TitleDeco from '../TitleDeco'

import logo_mys from '../../images/logos/mys.png'
import logo_onada from '../../images/logos/onada-feminista.png'
import logo_radiostboi from '../../images/logos/radio-sant-boi.png'
import logo_radio4 from '../../images/logos/radio4.png'
import logo_vilaweb from '../../images/logos/vilaweb.png'

const Media = () => {
    return (
        <div className='media bg-secondary py-5 mx-0'>
            <Container fluid>
                <Row className='d-flex justify-content-center mb-2 m-0'>
                    <TitleDeco className='text-center' text={'Mi presencia en los medios'}></TitleDeco>
                </Row>
                <Row className='d-flex flex-column flex-sm-row align-items-center justify-content-sm-center'>
                    <Image
                        className='img_logo mt-3 mt-sm-0 my-2 my-sm-0 mx-sm-3'
                        src={logo_mys}
                    />
                    <Image 
                        className='img_logo mt-3 mt-sm-0  my-2 my-sm-0 mx-sm-3'
                        src={logo_onada}
                    />
                    <Image 
                        className='img_logo mt-3 mt-sm-0  my-2 my-sm-0 mx-sm-3'
                        src={logo_radiostboi}
                    />
                    <Image 
                        className='img_logo mt-3 mt-sm-0  my-2 my-sm-0 mx-sm-3'
                        src={logo_radio4}
                    />
                    <Image 
                        className='img_logo mt-3 mt-sm-0  my-2 my-sm-0 mx-sm-3'
                        src={logo_vilaweb}
                    />
                </Row>
            </Container>
        </div>
    )
}

export default Media
