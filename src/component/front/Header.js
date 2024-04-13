import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux';

function Header() {
  const {cartList} = useSelector((state) => state?.persistedReducer?.cartData);
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container  >
          <Navbar.Brand href="/">MyApp</Navbar.Brand>
          
          <Nav className='io_navbar'>
            <Nav.Link href="/cart">cart({cartList.length})</Nav.Link>  
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header