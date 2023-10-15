import React from 'react'
import rocket from "/React-Projects/portfolioupdate/src/images/rocket.png"
import { Col, Row, Button, Container } from "reactstrap"
const AboutMe = () => {
  return (
    <div className='justify-content-between mt-3'>
    <Container   >

      <Row >
        <Col xl={8} md={6} sm={6} lg={8} className='mt-5 anim2'>
           <h4>Hey There! MyName is AmrElsherbiny...Iam A FrontEnd Developer, Iam 18 Years old , Young Talented Programmer With alot of Experience , I have worked on large projects and sites already in the search engine at the highest level , You Can See My Projects Here And Don't think before contacting me </h4>
        </Col>


        <Col xl={4} md={6} sm={6} lg={4} className='animm text-center'>
          <img className='rockimg' src={rocket} alt="" srcset="" />
        </Col>
      </Row>




    </Container>
  </div>
  )
}

export default AboutMe