import React from 'react'
import Container from './Container'
import Header from './Header'
import HeroSection from './HeroSection'
import Divider from './Divider'
import ChooseCart from './ChooseCart'

const Home = () => {
    return (
        <div className='w-full'>
            <Header />
            <HeroSection />
            <Container>
                <ChooseCart/>
            </Container>
        </div>
    )
}

export default Home