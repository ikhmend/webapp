import {FaCartShopping} from "react-icons/fa6";
function EmptyCart(){
    return(
    <div className="cart-empty-wrapper">
        <div className="cart-empty-card">
            <div className="cart-empty-icon">
                <FaCartShopping />
            </div>
            <h3 className="cart-empty-title">Таны сагс хоосон байна.</h3>
            <p className="cart-empty-sub">Add some delicious items to get started!</p>
            <a href="#" className="cart-browse-btn">Хайх</a>
        </div>
    </div>
    );
}
export default EmptyCart;