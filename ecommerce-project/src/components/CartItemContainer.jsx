import "./CartItemContainer.css"
import axios from "axios"
import {useState,useEffect} from "react"
import {getAddedDate, getAddedDay, getAddedMonth} from "../utils/days"
import {DeliveryOption} from "./DeliveryOption"
export function CartItemContainer({productName, price, quantity, imageUrl, productId, deliveryOptionId}){
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
                        />
                  ))}
                 
                  {/* <div className="delivery-option">
                    <input type="radio"
                      className="delivery-option-input"
                      name="delivery-option-1" />
                    <div>
                      <div className="delivery-option-date">
                        {getAddedDay(7)}, {getAddedMonth(7)} {getAddedDate(7)}
                      </div>
                      <div className="delivery-option-price">
                        FREE Shipping
                      </div>
                    </div>
                  </div>
                  <div className="delivery-option">
                    <input type="radio"
                      className="delivery-option-input"
                      name="delivery-option-1" />
                    <div>
                      <div className="delivery-option-date">
                        Wednesday, June 15
                      </div>
                      <div className="delivery-option-price">
                        $4.99 - Shipping
                      </div>
                    </div>
                  </div>
                  <div className="delivery-option">
                    <input type="radio"
                      className="delivery-option-input"
                      name="delivery-option-1" />
                    <div>
                      <div className="delivery-option-date">
                        Monday, June 13
                      </div>
                      <div className="delivery-option-price">
                        $9.99 - Shipping
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
        </>
    )
    
}