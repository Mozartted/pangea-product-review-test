import {React, useState, useEffect} from "react"
import Head from 'next/head'
import {connect} from 'react-redux'
import { Container, Row, Col, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Navbar from "../components/navbar"
import CartModal from "../components/cart-modal"
import ProductView from "../components/product-view"
import {useToasts} from 'react-toast-notifications'

import {useQuery, useLazyQuery} from "@apollo/react-hooks"
import {GET_PRODUCTS, GET_CURRENCY} from "../utils/queries"

// actions
import {addToCart, removeFromCart} from "../store/Actions/Cart"

const Home = (props) => {

  const [products, updateProducts] = useState([])
  const [currencies, updateCurrencies] = useState([])
  const [currentCurrency, updateCurrentCurrency] = useState("USD")
  const [cartModalState, updateCartModalState] = useState(false)

  const [loadProducts, {loading: productLoading, data: productData}]= useLazyQuery(GET_PRODUCTS, {
      variables: {
        currency: currentCurrency
      },
      onCompleted: data => {
          updateProducts(data.products)
      }
  })

  
  const {loading: currencyLoading, data: currencyData} = useQuery(GET_CURRENCY, {
    onCompleted: data => {
          updateCurrencies(data.currency)
        }
    })
      
  const loadCurrency = (newCurrency) => {
    updateCurrentCurrency(newCurrency)
    loadProducts({
      variables: {
        currency: newCurrency
      }
    })

    // update the cart stored values.
    
  }
      
      // update current currency and update the list of data with the new currencies for each of them.
  
  // setup tosts.
  const {addToast} = useToasts()
  
  const closeCart = () => {
    updateCartModalState(false)
  }
  
  const openCart = () => {
    updateCartModalState(true)
  }

  const addToCart = async (item) => {
    try {
      await props.addToCart(item)
      addToast('Added to cart', {
        appearance: "success",
        placement: "left",
        autoDismiss: true
      })
      openCart()
    } catch (e) {
      addToast(e.message, {
        appearance: "error",
        placement: "left",
        autoDismiss: true
      })
    }
  }

  useEffect(() => {
    loadProducts()
  }, [0])
  
  return (
    <>
      <CartModal show={cartModalState} handleClose={closeCart} {...{currencies, currentCurrency, loadCurrency}} />
      <Head>
        <title>All lumin products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <Navbar openCart={openCart}/>
  
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
                    <div className="spinner-grow" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                : 
                <>
                    {products.map((item, index) => {
                      return  <Col md={4} sm={6} className="my-5" key={index}>
                                <ProductView item={item} addToCart={addToCart} currentCurrency={currentCurrency}/>
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

const mapStateToProps = (state) => ({})
const mapDispatchToProps = {
  addToCart,
  removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)