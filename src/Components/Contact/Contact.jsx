import React from 'react'
import { BsWhatsapp } from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import { Col, Row, Button, Container } from "reactstrap"
import "../Contact/Contact.css"
const Contact = () => {
    return (
        <>
            
            <div className='text-center mt-4 mb-5 animm'>
          <h1>Contact Me</h1>
        </div>

            <Container className='mb-5'>
                
                <Row>
                    <Col xl={8} md={6} sm={6} lg={8} className='d-flex mt-5 anim2'>
                        <h2 className='mt-3'>Chat with me:</h2>
                        <a href="https://wa.me/201101761785?">
                        <div class="pulse ms-3">
                            <BsWhatsapp className='mb-3 '/>
                        </div>
                        </a>
                        
                    </Col>

                    <Col xl={4} md={6} sm={6} lg={4} className='d-flex mt-5 anim2'>
                        <h2 className='mt-3'>Call Me:</h2>
                        
                        <div class=" ms-3 mt-3">
                            <h3 className='mb-3 '>+20 11 017 617 85</h3>
                        </div>
                        
                        
                    </Col>

                    <Col xl={7} md={6} sm={6} lg={7} className='d-flex mt-5 anim2'>
                        <h2 className='mt-3'>My FaceBook Account:</h2>
                        <a href="https://www.facebook.com/profile.php?id=100085240531782&mibextid=ZbWKwL">
                        <div class="pulse2 ms-3">
                            <BsFacebook className='mb-3 '/>
                        </div>
                        </a>
                       
                    </Col>

                    <Col xl={5} md={6} sm={6} lg={5} className='d-flex mt-5 anim2'>
                        <h2 className='mt-3'>My Github Account:</h2>
                        <a href="https://github.com/AmrElsherbiny88">
                        <div class="pulse3 ms-3">
                           
                            <BsGithub className='mb-3 '/>
                           
                        </div>
                        </a>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Contact