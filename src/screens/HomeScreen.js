import React from 'react'
import AboutMe from '../components/HomeScreen/AboutMe'
import Header from '../components/HomeScreen/Header'
import SubscribeForm from '../components/HomeScreen/SubscribeForm'

const HomeScreen = () => {
    return (
        <>
            <Header />
            <SubscribeForm />
            <AboutMe /> 
        </>
    )
}

export default HomeScreen
