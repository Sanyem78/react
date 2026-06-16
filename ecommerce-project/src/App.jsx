import {Routes, Route} from "react-router"
import { useEffect, useState } from "react"
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import './App.css'
import axios from "axios"
import { NotFoundPage } from "./pages/NotFoundPage"

function App() {
    const [cart,setCart] = useState([])

    const loadCart = async()=>{
       
      await axios.get("/api/cart-items?expand=product")
        .then((response)=>{
            setCart(response.data)
        })
    }

    useEffect(()=>{
      loadCart()
    },[])
    console.log(cart)
  return (
    <>
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route index element={<HomePage cart={cart}/>}/>
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path="orders" element={<OrdersPage cart={cart}/>} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
    </>
  )
}

export default App