import {Routes, Route} from "react-router"
import { HomePage } from './pages/HomePage'
import { Checkout } from './pages/Checkout'
import { Orders } from './pages/Orders'
import './App.css'

function App() {
  
  return (
    <>
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route index element={<HomePage />}/>
      <Route path="checkout" element={<Checkout />} />
      <Route path="orders" element={<Orders />} />

    </Routes>
    </>
  )
}

export default App