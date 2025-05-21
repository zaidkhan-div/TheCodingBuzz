import React, { lazy, Suspense } from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import Container from '../Components/Container'
import ChooseCart from '../Components/ChooseCart1'
import SeasonCart from '../Components/SeasonCart2'
import Divider from '../Components/Divider'
import FamilyCart3 from '../Components/FamilyCart3'
import MidSection from '../Components/MidSection'
import Partners from '../Components/Partners'

const ContactForm = lazy(() => import('../Components/ContactForm'));
const Footer = lazy(() => import('../Components/Footer'))

const Home = () => {
    return (
        <div className='w-full'>
            <Header />
            <HeroSection />
            <Container>
                {/* <h1>Home</h1> */}
                <ChooseCart />
                <Divider width='1240px' height='1px' color='#505050' opacity='0.2' />
                <SeasonCart />
                <Divider width='1240px' height='1px' color='#505050' opacity='0.2' />
                <FamilyCart3 />
                <Divider width='1240px' height='1px' color='#505050' opacity='0.2' />
            </Container>
            <MidSection />
            <Container>
                <Divider width='1240px' height='1px' color='#505050' opacity='0.2' />
                <Partners />
                <Divider width='1240px' height='1px' color='#505050' opacity='0.2' />
            </Container>
            <Suspense fallback={<div>Loading Contact Form...</div>}>
                <ContactForm />
            </Suspense>
            <Container>
                <Divider width='1240px' height='1px' color='#505050' opacity='0.2' />
            </Container>
            <Suspense fallback={<div>Loading Footer..</div>}>
                <Footer />
            </Suspense>
        </div>

    )
}

export default Home