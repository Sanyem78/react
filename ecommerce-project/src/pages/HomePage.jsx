import axios from "axios"
import {Header} from "../components/Header"
// import { products } from "../data/products"
import {Product} from "../components/Product"
import { useState,useEffect } from "react"
import homepagefavicon from "../assets/images/home-favicon.png"
import "../index.css"
import "./HomePage.css"

export function HomePage({cart}){
    // fetch('http://localhost:3000/api/products').then((response)=>{
    //     return response.json();
    // }).then((data)=>{
    //     console.log(data);
    // });
    const [products,setProducts] = useState([])
    useEffect(()=>{
        axios.get('/api/products')
            .then((response)=>{
                setProducts(response.data);
            })
       
    },[]);
    
    
    return (
        <>
        <link rel="icon" type="image/svg+xml" href={homepagefavicon}/>

            <Header cart={cart}/>
        <div className="home-page">
        <div className="products-grid">
            {products.map((product) => (
                <Product
                  
                    key={product.id}
                    image={product.image}
                    keywords={product.keywords}
                    name={product.name}
                    priceCents={product.priceCents}
                    rating={product.rating}
                />
            ))} 
        </div>
        </div>
        </>
    );
}