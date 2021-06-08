import React from 'react'
import AboutMe from '../components/HomeScreen/AboutMe'
import Header from '../components/HomeScreen/Header'
import NoteQuote from '../components/HomeScreen/NoteQuote'
import SubscribeForm from '../components/HomeScreen/SubscribeForm'
import Clarification from '../components/HomeScreen/Clarification'
import Media from '../components/HomeScreen/Media'

const HomeScreen = () => {
    return (
        <>
            <Header />
            <SubscribeForm />
            <AboutMe />
            <NoteQuote />
            <Media />
            <Clarification />
        </>
    )
}

export default HomeScreen
