import {Link} from "react-router"
import {Header} from "../components/Header"
import {OrderContainer} from "../components/OrderContainer"

import orderpagefavicon from "../assets/images/orders-favicon.png"

import "./OrdersPage.css"
import "../components/header.css"
import "../index.css"
import { useState,useEffect } from "react"
import axios from "axios"

export function OrdersPage({cart}){
    const [orders, setOrders] = useState(null)
    useEffect(()=>{
      axios.get("/api/orders?expand=products")
        .then((response)=>{
            setOrders(response.data)
        })
    },[])
    console.log(orders)
    return (
    <>
            <link rel="icon" type="image/svg+xml" href={orderpagefavicon}/>
    
      <title>Orders</title>
        <Header cart={cart}/>

    <div className="orders-page">
      <div className="page-title">Your Orders</div>

      <div className="orders-grid">
        {  
          orders?.map((order)=>(
            <OrderContainer
            key = {order.id} 
            id = {order.id} 
            orderTime = {order.orderTimeMs}
            products={order.products}
            totalCostCents={order.totalCostCents}/>
          ))
        }   
        
      </div>
    </div>
    </>);
}