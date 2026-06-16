import "./CartItemContainer.css"
import axios from "axios"
import {useState,useEffect} from "react"
import {getAddedDate, getAddedDay, getAddedMonth} from "../utils/days"
import {DeliveryOption} from "./DeliveryOption"
export function CartItemContainer({productName, price, quantity, imageUrl, productId, deliveryOptionId, loadCart}){
   const [deliveryOptions, setDeliveryOptions] = useState([]);
   useEffect(()=>{
      axios.get("/api/delivery-options")
        .then((response)=>{
          setDeliveryOptions(response.data)
        })
   },[])
   const selectedDeliveryOption = deliveryOptions
        .find((deliveryOption)=>{
          return deliveryOption.id===deliveryOptionId
        })
    const deliveryDays = selectedDeliveryOption?.deliveryDays
        console.log(deliveryDays) 
    return( 
        <>
        <div className="cart-item-container">
              <div className="delivery-date">
                Delivery date: {getAddedDay(deliveryDays)}, {getAddedMonth(deliveryDays)} {getAddedDate(deliveryDays)}
              </div>

              <div className="cart-item-details-grid">
                <img className="product-image"
                  src={imageUrl} />

                <div className="cart-item-details">
                  <div className="product-name">
                    {productName}
                  </div>
                  <div className="product-price">
                    ${price}
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity: <span className="quantity-label">{quantity}</span>
                    </span>
                    <span className="update-quantity-link link-primary">
                      Update
                    </span>
                    <span className="delete-quantity-link link-primary">
                      Delete
                    </span>
                  </div>
                </div>

                <div className="delivery-options">
                  <div className="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  {deliveryOptions.map((deliveryOption)=>(
                       <DeliveryOption 
                          key={deliveryOption.id}
                          id={deliveryOption.id}
                          productId={productId}
                          deliveryDays={deliveryOption.deliveryDays} 
                          cost={deliveryOption.priceCents}
                          deliveryOptionId={deliveryOptionId}
                          deliveryOptions={deliveryOptions}
                          loadCart={loadCart}
                        />
                  ))}
                 
                   
                </div>
              </div>
            </div>
        </>
    )
    
}