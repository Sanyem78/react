import {getAddedDate, getAddedDay, getAddedMonth} from "../utils/days"
import { formatMoney } from "../utils/money"
import "./DeliveryOption.css"

export function DeliveryOption({id, deliveryDays, cost, productId,deliveryOptionId}){

    return(
        <>
            <div className="delivery-option">
            <input type="radio"
                checked={id === deliveryOptionId}
                className="delivery-option-input"
                name={`delivery-option-${productId}`} />
            <div>
                <div className="delivery-option-date">
                {getAddedDay(deliveryDays)}, {getAddedMonth(deliveryDays)} {getAddedDate(deliveryDays)}
                </div>
                <div className="delivery-option-price">
                    {cost === 0 ? "FREE Shipping": `$${formatMoney(cost)} - Shipping` }
                </div>
            </div>
            </div>
        </>
    )
}