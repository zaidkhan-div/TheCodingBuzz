import React from 'react'
import Container from './Container'
import Header from './Header'
import HeroSection from './HeroSection'

const Home = () => {
    return (
        <div className='w-full'>
            <Header />
            <HeroSection />
            <Container>
            </Container>
        </div>
    )
}

export default Home