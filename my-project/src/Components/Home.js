import React from 'react'
import Container from './Container'
import Header from './Header'
import HeroSection from './HeroSection'
import Divider from './Divider'
import ChooseCart from './ChooseCart'
import Season from './Season'
import Footer from './Footer'
import Family from './Family'
import MidSection from './MidSection'
import Partners from './Partners'
import ContactForm from './ContactForm'

const Home = () => {
    return (
        <div className='w-full'>
            <Header />
            <HeroSection />
            <Container>
                <ChooseCart />
                <Divider width='1240px' height='1px' color='#505050' opacity='0.2' />
                <Season />
                <Divider width='1240px' height='1px' color='#505050' opacity='0.2' />
                <Family />
                <Divider width='1240px' height='1px' color='#505050' opacity='0.2' />
            </Container>
            <MidSection />
            <Container>
                <Divider width='1240px' height='1px' color='#505050' opacity='0.2' />
                <Partners />
                <Divider width='1240px' height='1px' color='#505050' opacity='0.2' />
            </Container>
            <ContactForm/>
            <Footer />
        </div>
    )
}

export default Home