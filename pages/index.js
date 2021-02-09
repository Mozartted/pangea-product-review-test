import {React, useState} from "react"
import Head from 'next/head'
import { Container, Row, Col, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Navbar from "../components/navbar"
import CartModal from "../components/cart-modal"
import ProductView from "../components/product-view"

import {useQuery} from "@apollo/react-hooks"
import {GET_PRODUCTS} from "../utils/queries"

const Home = () => {

  const [products, updateProducts] = useState([])
  const [modalState, updateModalState] = useState(false)

  const {loading: productLoading, data: productData} = useQuery(GET_PRODUCTS, {
      onCompleted: data => {
          updateProducts(data.products)
      }
  })

  const handleClose = () => {
    updateModalState(false)
  }

  const handleOpen = () => {
    updateModalState(true)
  }

  return (
    <>
      <CartModal show={modalState} handleClose={handleClose}/>
      <Head>
        <title>All lumin products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <Navbar />
  
      <Container fluid className="container-fluid">
        <Row className="my-4">
          <Container>
            <Row>
              <Col md={12}>
                <h1 className="display-3"> All Products </h1>
                <p>A 360 look at lumin</p>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className="mt-3 bg-gray-green product-section">
          <Container>
            <Row>
              {
                productLoading ?
                  <div className="col-12 d-flex justify-content-center mt-4">
                    <div class="spinner-grow" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                : 
                <>
                    {products.map((item, index) => {
                      return  <Col md={4} sm={6} className="my-5" key={index}>
                                <ProductView item={item}/>
                              </Col>
                    })}
                </>
              }
            </Row>
          </Container>
        </Row>
      </Container>
  
    </>
  )
}

export default Home