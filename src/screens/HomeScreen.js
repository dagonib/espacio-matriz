import React from 'react'
import AboutMe from '../components/HomeScreen/AboutMe'
import Header from '../components/HomeScreen/Header'
import NoteQuote from '../components/HomeScreen/NoteQuote'
import SubscribeForm from '../components/HomeScreen/SubscribeForm'
import EspacioMatriz from '../components/HomeScreen/EspacioMatriz'
import Clarification from '../components/HomeScreen/Clarification'

const HomeScreen = () => {
    return (
        <>
            <Header />
            <SubscribeForm />
            <AboutMe /> 
            <NoteQuote />
            <EspacioMatriz />
            <Clarification />
        </>
    )
}

export default HomeScreen
