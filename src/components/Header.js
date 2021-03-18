import React from 'react';
import { Button } from 'react-bootstrap'
import '../styles/header.styles.scss'

const Header = () => {
    return (
        <div className='header'>
            <h1>Headers</h1>
            <Button variant="danger">Click me</Button>
        </div>
    )
}

export default Header
