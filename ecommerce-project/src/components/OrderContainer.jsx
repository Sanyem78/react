import "./OrderContainer.css"
import { formatEpoch } from "../utils/days"
import { formatMoney } from "../utils/money"
import { ProductPayment } from "./ProductPayment"
export function OrderContainer({ orderTime, products, totalCostCents, id }) {
    // console.log(products)
    return (
        <>
            <div className="order-container">
                <div className="order-header">
                    <div className="order-header-left-section">
                        <div className="order-date">
                            <div className="order-header-label">Order Placed:</div>
                            <div>{formatEpoch(orderTime)}</div>
                        </div>
                        <div className="order-total">
                            <div className="order-header-label">Total:</div>
                            <div>${formatMoney(totalCostCents)}</div>
                        </div>
                    </div>

                    <div className="order-header-right-section">
                        <div className="order-header-label">Order ID:</div>
                        <div>{id}</div>
                    </div>
                </div>

                <div className="order-details-grid">
                    {products?.map((product) => (
                        <ProductPayment
                            key={product.productId}
                            image={product.product.image}
                            name={product.product.name}
                            quantity={product.quantity}
                            estimatedDeliveryTimeMs={product.estimatedDeliveryTimeMs}
                        />
                    ))}

                </div>
            </div>
        </>
    )
}