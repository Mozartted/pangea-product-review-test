import Head from 'next/head'
import { Container, Row, Col, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Navbar from "../components/navbar"


const Home = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />

    <Container className="container-fluid">

      <Row className="pt-5">
        <Col className="my-auto">
          <h1 className="display-2 font-weight-bolder">
            <strong>
              Next.JS + Bootstrap
            </strong>
          </h1>
          <p className="lead">
            Liked this tutorial?
          </p>

          <a className="btn btn-primary btn-lg" href="https://twitter.com/mike_alche">
            Follow me on twitter
            </a>
        </Col>
        <Col className="">
          <img className="rounded " src="http://placekitten.com/500/500" alt="" />
        </Col>
      </Row>
    </Container>

  </>
)

export default Home