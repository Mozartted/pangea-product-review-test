import { Container, Navbar , Nav} from 'react-bootstrap'
import {ShoppingCart} from "react-feather"

const CustomNavbar = ({openCart}) => {
    return <Navbar bg="light" expand="lg">
    <Container className="container-fluid">
      <Navbar.Brand href="#home"><h3>Lumin</h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Shop</Nav.Link>
          <Nav.Link href="#link">Learn</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link onClick={openCart}><ShoppingCart/></Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default CustomNavbar