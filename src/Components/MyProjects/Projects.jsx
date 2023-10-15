import React from 'react'
import { Col, Row, Button, Container, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
import { BsFillRocketTakeoffFill } from "react-icons/bs"
import "../MyProjects/Projects.css"
import p2048 from "/React-Projects/portfolioupdate/src/images/2048.png"
import exercise from "/React-Projects/portfolioupdate/src/images/exercise.png"
import facebookclone from "/React-Projects/portfolioupdate/src/images/facebookclone.png"
import iphonescreen from "/React-Projects/portfolioupdate/src/images/iphonescreen.png"
import qurank from "/React-Projects/portfolioupdate/src/images/qurank.png"
import shop from "/React-Projects/portfolioupdate/src/images/shop.png"
import shopbig from "/React-Projects/portfolioupdate/src/images/shopbig.png"
import solarsystem from "/React-Projects/portfolioupdate/src/images/solarsystem.png"
import summarize from "/React-Projects/portfolioupdate/src/images/summarize.png"
import pomodoro from "/React-Projects/portfolioupdate/src/images/pomodoro.png"



const Projects = () => {
  return (
    <>
      <div className='text-center mt-4 mb-5 animm'>
          <h1>My Projects</h1>
        </div>

      <div className='ms-5 '>
      
        <Container className='mt-4 animcards ' id='pro'>
          <Row>
            <Col xl={4} md={6} sm={12} lg={4} className='mt-3'>
              <Card
                style={{
                  width: '18rem'
                }}
              >
                <img
                  className='proj-img'
                  alt="Sample"
                  src={pomodoro}
                />
                <CardBody className='bg-dark text-white border-none'>
                  <CardTitle tag="h5">
                    Full Pomodoro WebApp
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 sub mt-1"
                    tag="p"
                  >
                   HTML , Css , JS
                  </CardSubtitle>
                  <CardText>
                    Pomodoro website with alarm and adjustable settings 
                  </CardText>
                  <a href='https://pomodoro-amr-elsherbiny88.vercel.app/'>
                    <Button>
                      Visit The Project
                      <span className='animicons ms-2'><BsFillRocketTakeoffFill /></span>
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </Col>


            <Col xl={4} md={6} sm={12} lg={4} className='mt-3'>
              <Card
                style={{
                  width: '18rem'
                }}
              >
                <img
                  className='proj-img'
                  alt="Sample"
                  src={summarize}
                />
                <CardBody className='bg-dark text-white border-none'>
                  <CardTitle tag="h5">
                    Ai Article Summarizer
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 sub mt-1"
                    tag="p"
                  >
                   ReactJs
                  </CardSubtitle>
                  <CardText>
                    in that website you can summarize any online article by paste link only
                  </CardText>
                  <a href='https://summarizer-ai-amrelsherbiny.netlify.app/'>
                    <Button>
                      Visit The Project
                      <span className='animicons ms-2'><BsFillRocketTakeoffFill /></span>
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </Col>


            <Col xl={4} md={6} sm={12} lg={4} className='mt-3'>
              <Card
                style={{
                  width: '18rem'
                }}
              >
                <img
                  className='proj-img'
                  alt="Sample"
                  src={exercise}
                />
                <CardBody className='bg-dark text-white border-none'>
                  <CardTitle tag="h5">
                    Excercise App
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 sub mt-1"
                    tag="p"
                  >
                   ReactJs
                  </CardSubtitle>
                  <CardText>
                   All Excercises For All body parts in only one place discover it!
                  </CardText>
                  <a href='https://fitness-amrelsherbiny.netlify.app/'>
                    <Button>
                      Visit The Project
                      <span className='animicons ms-2'><BsFillRocketTakeoffFill /></span>
                    </Button>
                  </a>

                </CardBody>
              </Card>
            </Col>

            <Col xl={4} md={6} sm={12} lg={4} className='mt-3'>
              <Card
                style={{
                  width: '18rem'
                }}
              >
                <img
                  className='proj-img'
                  alt="Sample"
                  src={solarsystem}
                />
                <CardBody className='bg-dark text-white border-none'>
                  <CardTitle tag="h5">
                    3D Solar System
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 sub mt-1"
                    tag="p"
                  >
                   HTML , CSS , JS
                  </CardSubtitle>
                  <CardText>
                   All Excercises For All body parts in only one place discover it!
                  </CardText>
                  <a href='https://solar-system-psi-sage.vercel.app/'>
                    <Button>
                      Visit The Project
                      <span className='animicons ms-2'><BsFillRocketTakeoffFill /></span>
                    </Button>
                  </a>

                </CardBody>
              </Card>
            </Col>


            <Col xl={4} md={6} sm={12} lg={4} className='mt-3'>
              <Card
                style={{
                  width: '18rem'
                }}
              >
                <img
                  className='proj-img'
                  alt="Sample"
                  src={p2048}
                />
                <CardBody className='bg-dark text-white border-none'>
                  <CardTitle tag="h5">
                    2048 game
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 sub mt-1"
                    tag="p"
                  >
                   HTML , CSS , JS
                  </CardSubtitle>
                  <CardText>
                  2048 full game see and enjoy it <span className='text-danger'>Note: works on pc only</span>
                  </CardText>
                  <a href='https://game-2-js.vercel.app/'>
                    <Button>
                      Visit The Project
                      <span className='animicons ms-2'><BsFillRocketTakeoffFill /></span>
                    </Button>
                  </a>

                </CardBody>
              </Card>
            </Col>

            <Col xl={4} md={6} sm={12} lg={4} className='mt-3'>
              <Card
                style={{
                  width: '18rem'
                }}
              >
                <img
                  className='proj-img'
                  alt="Sample"
                  src={qurank}
                />
                <CardBody className='bg-dark text-white border-none'>
                  <CardTitle tag="h5">
                  full Quran Kareem App
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 sub mt-1"
                    tag="p"
                  >
                    HTML , CSS , JS
                  </CardSubtitle>
                  <CardText>
                   full Quran kareem with its explanation and pray times
                  </CardText>
                  <a href='https://quran-kareem-nine.vercel.app/'>
                    <Button>
                      Visit The Project
                      <span className='animicons ms-2'><BsFillRocketTakeoffFill /></span>
                    </Button>
                  </a>

                </CardBody>
              </Card>
            </Col>


            <Col xl={4} md={6} sm={12} lg={4} className='mt-3'>
              <Card
                style={{
                  width: '18rem'
                }}
              >
                <img
                  className='proj-img'
                  alt="Sample"
                  src={facebookclone}
                />
                <CardBody className='bg-dark text-white border-none'>
                  <CardTitle tag="h5">
                    FaceBook Clone
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 sub mt-1"
                    tag="p"
                  >
                    HTML , CSS 
                  </CardSubtitle>
                  <CardText>
                   Facebook clone same interface and design
                  </CardText>
                  <a href='http://facebook-clone-eta.vercel.app/'>
                    <Button>
                      Visit The Project
                      <span className='animicons ms-2'><BsFillRocketTakeoffFill /></span>
                    </Button>
                  </a>

                </CardBody>
              </Card>
            </Col>

            <Col xl={4} md={6} sm={12} lg={4} className='mt-3'>
              <Card
                style={{
                  width: '18rem'
                }}
              >
                <img
                  className='proj-img'
                  alt="Sample"
                  src={shop}
                />
                <CardBody className='bg-dark text-white border-none'>
                  <CardTitle tag="h5">
                    E-Commerce
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 sub mt-1"
                    tag="p"
                  >
                   HTML , CSS , JS
                  </CardSubtitle>
                  <CardText>
                   Full E-commerce website with sections and filter functions
                  </CardText>
                  <a href='https://e-commerce-sepia-delta.vercel.app/'>
                    <Button>
                      Visit The Project
                      <span className='animicons ms-2'><BsFillRocketTakeoffFill /></span>
                    </Button>
                  </a>

                </CardBody>
              </Card>
            </Col>

            <Col xl={4} md={6} sm={12} lg={4} className='mt-3'>
              <Card
                style={{
                  width: '18rem'
                }}
              >
                <img
                  className='proj-img'
                  alt="Sample"
                  src={iphonescreen}
                />
                <CardBody className='bg-dark text-white border-none'>
                  <CardTitle tag="h5">
                    Iphone Screen
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 sub mt-1"
                    tag="p"
                  >
                   HTML , CSS , JS
                  </CardSubtitle>
                  <CardText>
                   Iphone screen wallpaper change with beautiful animation and design
                  </CardText>
                  <a href='https://iphone-design.vercel.app/'>
                    <Button>
                      Visit The Project
                      <span className='animicons ms-2'><BsFillRocketTakeoffFill /></span>
                    </Button>
                  </a>

                </CardBody>
              </Card>
            </Col>


            <Col xl={4} md={6} sm={12} lg={4} className='mt-3'>
              <Card
                style={{
                  width: '18rem'
                }}
              >
                <img
                  className='proj-img'
                  alt="Sample"
                  src={shopbig}
                />
                <CardBody className='bg-dark text-white border-none'>
                  <CardTitle tag="h5">
                  E-commerce  interface design
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 sub mt-1"
                    tag="p"
                  >
                   HTML , CSS , JS
                  </CardSubtitle>
                  <CardText>
                   Awesome ecommerce website interface design
                  </CardText>
                  <a href='https://clothes-shop-full-respinsive.vercel.app/'>
                    <Button>
                      Visit The Project
                      <span className='animicons ms-2'><BsFillRocketTakeoffFill /></span>
                    </Button>
                  </a>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Projects