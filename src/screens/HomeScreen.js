import React from 'react'
//import AboutMe from '../components/homeScreen/AboutMe'
import Header from '../components/homeScreen/Header'
import NoteQuote from '../components/homeScreen/NoteQuote'
import SubscribeForm from '../components/homeScreen/SubscribeForm'
import Clarification from '../components/homeScreen/Clarification'
import Media from '../components/homeScreen/Media'

const HomeScreen = () => {
    return (
        <>
            <Header />
            <SubscribeForm />
            <NoteQuote />
            <Media />
            <Clarification />
        </>
    )
}

export default HomeScreen
