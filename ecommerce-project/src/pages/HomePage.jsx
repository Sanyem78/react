import {Header} from "../components/Header"
import { products } from "../data/products"
import {Product} from "../components/Product"
import homepagefavicon from "../assets/images/home-favicon.png"
import "../index.css"
import "./HomePage.css"

export function HomePage(){
    return (
        <>
        <link rel="icon" type="image/svg+xml" href={homepagefavicon}/>

            <Header />
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