import { React, useEffect, useState } from 'react'
import { Col, Row, Button, Container } from "reactstrap"
import AboutMe from '../Components/About/AboutMe'
import Skils from '../Components/About/Skils'
import Projects from '../Components/MyProjects/Projects'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
const Home = () => {

  return (
   <>
    
    <AboutMe />
    <Skils />
    <Projects />

    <Contact/>
    <Footer />
    </>

  )
}

export default Home