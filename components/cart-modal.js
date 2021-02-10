import {Modal, Button, Card, Col, Dropdown} from "react-bootstrap"
import {connect} from 'react-redux'
import {X, ShoppingCart, ArrowLeft} from "react-feather"

import {getSymbol} from "../utils/helpers"
import {addToItem, minusFromItem, removeFromCart} from "../store/Actions/cart"

const CartModal = ({
    show, 
    handleClose, 
    cart, 
    addItem, 
    minusItem, 
    currentCurrency, 
    currencies,
    loadCurrency,
    removeItem
}) => {

    const sumUpAndTotal = () => {
        let sum = 0;
        cart.forEach((item, index) => {
            sum += (item.price * item.amount)
        })

        return sum
    }

    return (
        <Modal className="right" show={show} onHide={handleClose}>
            <Modal.Header className="bg-gray-green">
                <div className="row">
                    <div className="col-auto">
                        <ArrowLeft onClick={handleClose}/>
                    </div>
                    <div className="col">
                        <h5>YOUR CART</h5>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body className="bg-gray-green overflow-auto">
                <div className="container">
                    <div className="row mt-2">
                        <div className="col">
                        <Dropdown>
                            <Dropdown.Toggle variant="white" id="dropdown-basic" className="bg-white">
                               {currentCurrency}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="currency-dropmenu">
                                {
                                    currencies.map((currency, index) => (
                                        <Dropdown.Item key={index} onClick={()=>loadCurrency(currency)}>{currency}</Dropdown.Item>
                                    ))
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                    </div>
                    {
                        cart.length > 0 ? 
                        <>
                            {
                                cart.map((item, index) => {
                                    return (
                                        <div className="row my-2" key={index}>
                                            <Col md={12}>
                                                <Card>
                                                    <Card.Body>
                                                        <div className="row">
                                                            <Col md={8}>
                                                                <h5>{item.title}</h5>
                                                            </Col>
                                                            <Col md="auto" className="ml-auto">
                                                                <X onClick={() => removeItem(item)}/>
                                                            </Col>
                                                        </div>
                                                        <div className="row">
                                                            <Col md="auto" className="ml-auto">
                                                                <img src={item.image_url} width="25" height="25" />
                                                            </Col>
                                                        </div>
                                                        <div className="row">
                                                            <Col md={8}>
                                                                <div className="quantity">
                                                                    <button className="plus-btn cart-button border-0 rounded" onClick={() => minusItem(item)}>
                                                                    -
                                                                    </button>
                                                                    <input type="text" name="name" value={item.amount} className="border-1" onChange={() => {}} />
                                                                    <button className="minus-btn cart-button border-0 rounded" onClick={() => addItem(item)}>
                                                                    +
                                                                    </button>
                                                                </div>
                                                            </Col>
                                                            <Col md="auto" className="ml-auto mt-2">
                                                            <p>{getSymbol(currentCurrency)} {item.price * item.amount}</p>
                                                            </Col>
                                                        </div>
                                                    </Card.Body>
                                                    {/* <Card.Header></Card.Header> */}
                                                </Card>
                                            </Col>
                                        </div>
                                    )
                                })
                            }
                        </>:
                        <div className="row mt-5">
                            <div className="col-12 justify-content-center text-center">
                                <ShoppingCart size={70} color={'#4B5648'}/>
                                <p>You have no items in your cart</p>
                            </div>
                        </div>
                    }
                </div>
            </Modal.Body>
            <Modal.Footer className="bg-gray-green overflow-">
                <hr/>
                <div className="col-12">
                    <div className="row">
                        <div className="col-auto">
                            <small>Subtotal</small>
                        </div>
                        <div className="col-auto ml-auto">
                            {getSymbol(currentCurrency)} {sumUpAndTotal()}
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <Button variant="white" className="btn-block bg-white" onClick={handleClose}>
                        <small>MAKE THIS A SUBSCRIPTION</small>
                    </Button>
                    <Button variant="gray-green-dark" className="btn-block" onClick={handleClose}>
                        <small>PROCEED TO CHECKOUT</small>
                    </Button>
                </div>
                {/* <div className="row">
                </div> */}
            </Modal.Footer>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})
const mapDispatchToProps = {
    addItem: addToItem,
    minusItem: minusFromItem,
    removeItem: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal)