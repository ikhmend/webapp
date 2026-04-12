import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmptyCart from "../components/Cart/EmptyCart";
import CartItemSection from "../components/Cart/CartItemSection";
function CartPage({cart, cartCount, qtyUp, qtyDown, removeItem}){
    return(
        <div>
            <Navbar cartCount={cartCount}/>
            {cart.length===0 ? <EmptyCart/>: <CartItemSection cart={cart} qtyUp={qtyUp} qtyDown={qtyDown} removeItem={removeItem}/>}
            <Footer/>
        </div>
    )
}
export default CartPage;