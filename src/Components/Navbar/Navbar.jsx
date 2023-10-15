import { React, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Col, Row, Button, Container } from "reactstrap"
const Navbar = () => {
    let time = new Date().toLocaleTimeString()

    const [ctime, setTime] = useState(time)
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString()
        setTime(time)
    }
    setInterval(UpdateTime)
    return (
        <div className=' navv  mt-3'>

           
                <Container className='d-flex justify-content-between'>
                   
                  
                   <Col   className="linkss d-flex text-center ">
                    
                    <h5 className='text-white ms-4' >AmrElsherbiny</h5>

                    
                </Col>

                <Col  className="clockk ">
                    <p className='Clock'>{ctime}</p>
                </Col>
                   
                

                </Container>
                
           


        </div>
    )
}

export default Navbar