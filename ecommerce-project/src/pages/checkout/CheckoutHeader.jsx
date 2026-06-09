import {Link} from "react-router"
import mobilelogo from "../../assets/mobile-logo.png";
import logo from "../../assets/logo.png";
import "./CheckoutHeader.css"

export function CheckoutHeader(){
    return(<div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src={logo} />
              <img className="mobile-logo" src={mobilelogo} />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              to="/">3 items</Link>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>);
}