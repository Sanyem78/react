import logowhite from "../assets/logo-white.png";
import mobilelogowhite from "../assets/mobile-logo-white.png";
import searchicon from "../assets/search-icon.png";
import carticon from "../assets/cart-icon.png";

export function Header(){
    return(
        <>
        <div className="header">
                <div classNameName="left-section">
                    <a href="/" className="header-link">
                    <img className="logo"
                        src={logowhite}/>
                    <img className="mobile-logo"
                        src={mobilelogowhite} />
                    </a>
                </div>
        
                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" />
        
                    <button className="search-button">
                    <img className="search-icon" src={searchicon} />
                    </button>
                </div>
        
                <div className="right-section">
                    <a className="orders-link header-link" href="orders">
        
                    <span className="orders-text">Orders</span>
                    </a>
        
                    <a className="cart-link header-link" href="checkout">
                    <img className="cart-icon" src={carticon} />
                    <div className="cart-quantity">3</div>
                    <div className="cart-text">Cart</div>
                    </a>
                </div>
                </div>

        </>
    );
}