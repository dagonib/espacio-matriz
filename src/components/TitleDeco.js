import React from 'react'

const TitleDeco = ({text}) => {
    return (
        <h1 style={titledeco}>{text}</h1>
    )
}

const titledeco = {
    fontFamily: 'winsome, sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '1.5rem'
}

export default TitleDeco