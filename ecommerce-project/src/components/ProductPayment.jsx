import { formatEpoch } from "../utils/days"
import { Link } from "react-router"
import "./OrderContainer.css"

export function ProductPayment({image, name, quantity, estimatedDeliveryTimeMs}){

    return(
        <>
            <div className="product-image-container">
              <img src={image} />
            </div>

            <div className="product-details">
              <div className="product-name">
                {name}
              </div>
              <div className="product-delivery-date">
                Arriving on: {formatEpoch(estimatedDeliveryTimeMs)}
              </div>
              <div className="product-quantity">
                Quantity: {quantity}
              </div>
              <button className="buy-again-button button-primary">
                <img className="buy-again-icon" src="images/icons/buy-again.png" />
                <span className="buy-again-message">Add to Cart</span>
              </button>
            </div>

            <div className="product-actions">
              <Link to="/tracking">
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </Link>
            </div>
        </>
    )
    
}