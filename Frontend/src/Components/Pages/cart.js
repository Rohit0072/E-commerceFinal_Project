import React from 'react'
import Navbar from '../Navbar/navbar'
import ShoppingCartComponent from "../Cart/shopping-cart";
import Footer from '../Footer/footer'

function Cart() {
  return (
    <>
      <Navbar />
      < ShoppingCartComponent />
      <Footer />
    </>
  )
}

export default Cart