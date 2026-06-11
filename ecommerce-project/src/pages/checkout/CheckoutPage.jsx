import { CheckoutHeader } from "./CheckoutHeader";
import {CartItemContainer} from "../../components/CartItemContainer";
import {formatMoney} from "../../utils/money"
import checkoutpagefavicon from "../../assets/images/cart-favicon.png"

import "./CheckoutPage.css"
import "../../index.css"
export function CheckoutPage({cart}) {
   let totalQuantity = 0;
    cart.forEach(cartItem => {
        totalQuantity +=cartItem.quantity;
    });
    
    console.log(cart);
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
                  quantity={cartItem.product.quantity}
                  imageUrl={cartItem.product.image}
                />  )
               
              })}
          </div>

          <div className="payment-summary">
            <div className="payment-summary-title">
              Payment Summary
            </div>

            <div className="payment-summary-row">
              <div>Items (3):</div>
              <div className="payment-summary-money">$42.75</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">$4.99</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">$47.74</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">$4.77</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">$52.51</div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}