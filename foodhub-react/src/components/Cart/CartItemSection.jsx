import CartItemCard from "./CartItemCard";
function CartItemSection ({cart, qtyUp, qtyDown, removeItem}){
return (
    <div className="checkout-card">
        <h3>Миний сагс</h3>
        <div className="cart-items">
            {cart.map((item)=>(
                <CartItemCard
                key={item.id} item={item} qtyUp={qtyUp} qtyDown={qtyDown} removeItem={removeItem}/>
            ))}
        </div>
    </div>
    );
}
export default CartItemSection;