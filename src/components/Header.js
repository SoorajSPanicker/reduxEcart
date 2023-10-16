import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { ShoppingBag,ShoppingCart,Heart } from 'react-feather';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Header() {
  const cartArray=useSelector(state=>state.cart)
  const wishlistArray=useSelector(state=>state.wishlist)
  return (
    <div> <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Link to={''} style={{textDecoration:'none'}}><Navbar.Brand href="#home"><h2>ProKart <ShoppingBag size={25}/></h2>  </Navbar.Brand></Link>
      
      {/* <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav> */}
      <div>
        <Link to={`/wish`}><button className='p-2 me-3 ' style={{backgroundColor:'white'}}><Heart size={30} color='red'>  </Heart>{" "} <b style={{color:'red'}}>{wishlistArray.length}</b>  </button></Link>
        <Link to={`/cart`} ><button className='p-2 ' style={{backgroundColor:'white'}}><ShoppingCart color='blue' size={30} /> <b style={{color:'blue'}}>{cartArray.length}</b> </button></Link>
      </div>

      
    </Container>
  </Navbar></div>
  )
}

export default Header