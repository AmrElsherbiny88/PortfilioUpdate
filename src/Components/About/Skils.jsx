import React from 'react'
import { Col, Row, Button, Container, Progress } from "reactstrap"
import "../About/About.css"
const Skils = () => {
    return (



        <Container className='text-center '>
            <h1 className='mt-5 mb-5 animm'>My Skills</h1>

            <Row className='ms-5 ps-4 mt-4 anim2'>
                <Col xl={4} md={4} sm={4} lg={4} className='mt-3 '>
                    <Col className="progress-bar1">
                        <progress value="100" min="0" max="100" className='progg'></progress>
                        <h3 className='mt-5'>HTML <br /> 100%</h3>
                    </Col>
                </Col>

                <Col xl={4} md={4} sm={4} lg={4} className='mt-3 '>
                    <Col className="progress-bar2">
                        <progress value="100" min="0" max="100" className='progg'></progress>
                        <h3 className='mt-5'>CSS <br /> 100%</h3>
                    </Col>
                </Col>

                <Col xl={4} md={4} sm={4} lg={4} className='mt-3 ' >
                    <Col className="progress-bar3">
                        <progress value="100" min="0" max="100" className='progg'></progress>
                        <h3 className='mt-5'>JS <br /> 95%</h3>
                    </Col>
                </Col>
                <br />
                <Col xl={4} md={4} sm={4} lg={4} className='mt-3 ' >
                    <Col className="progress-bar4">
                        <progress value="100" min="0" max="100" className='progg'></progress>
                        <h3 className='mt-5'>React Js <br /> 95%</h3>
                    </Col>
                </Col>

                <Col xl={4} md={4} sm={4} lg={4} className='mt-3 ' >
                    <Col className="progress-bar5">
                        <progress value="100" min="0" max="100" className='progg'></progress>
                        <h3 className='mt-5'>Bootstrap <br /> 100%</h3>
                    </Col>
                </Col>

                <Col xl={4} md={4} sm={4} lg={4} className='mt-3 mb-5' >
                    <Col className="progress-bar6">
                        <progress value="100" min="0" max="100" className='progg'></progress>
                        <h3 className='mt-5'>Three JS <br /> 85%</h3>
                    </Col>
                </Col>



            </Row>




        </Container>
    )
}

export default Skils