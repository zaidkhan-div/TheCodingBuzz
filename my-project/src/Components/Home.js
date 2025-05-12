import React from 'react'
import Container from './Container'
import Header from './Header'
import HeroSection from './HeroSection'
import Divider from './Divider'
import ChooseCart from './ChooseCart'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='w-full'>
            <Header />
            <HeroSection />
            <Container>
                <ChooseCart />
                <Divider width='1240px' height='1px' color='#505050' opacity='0.2' />
            </Container>
            <Footer/>
        </div>
    )
}

export default Home