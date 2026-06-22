import { CheckoutHeader } from "./CheckoutHeader";
import {CartItemContainer} from "../../components/CartItemContainer";
import {formatMoney} from "../../utils/money"
import checkoutpagefavicon from "../../assets/images/cart-favicon.png"

import {PaymentSummary} from "../../components/PaymentSummary"

import "./CheckoutPage.css"
import "../../index.css"
export function CheckoutPage({cart, loadCart}) {
   let totalQuantity = 0;
    cart.forEach(cartItem => {
        totalQuantity +=cartItem.quantity;
    }); 
  return (
    <>
      <link rel="icon" type="image/svg+xml" href={checkoutpagefavicon}/>
    
      <title>Checkout</title>
      <CheckoutHeader quantity={totalQuantity}/>
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {
              cart.map((cartItem)=>{
                
                return( <CartItemContainer 
                  key={cartItem.productId}
                  productName={cartItem.product.name}
                  price={formatMoney(cartItem.product.priceCents)}
                  quantity={cartItem.quantity}
                  imageUrl={cartItem.product.image}
                  productId={cartItem.productId}
                  deliveryOptionId={cartItem.deliveryOptionId}
                  loadCart={loadCart}
                />  )
               
              })}
          </div>
          <PaymentSummary />
          
        </div>
      </div>
    </>
  );
}