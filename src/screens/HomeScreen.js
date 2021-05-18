import React from 'react'
import AboutMe from '../components/HomeScreen/AboutMe'
import Header from '../components/HomeScreen/Header'
import NoteQuote from '../components/HomeScreen/NoteQuote'
import SubscribeForm from '../components/HomeScreen/SubscribeForm'

const HomeScreen = () => {
    return (
        <>
            <Header />
            <SubscribeForm />
            <AboutMe /> 
            <NoteQuote />
        </>
    )
}

export default HomeScreen
