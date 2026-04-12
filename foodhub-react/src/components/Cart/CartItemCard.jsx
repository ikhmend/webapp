function CartItemCard({item, qtyUp, qtyDown, removeItem}){
    return(
        <article className="cart-item-card">
            {item.image && <img src={item.image} alt={item.name} className="cart-item-image"/>}
            <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">{item.price}</p>
                <div className="cart-item-actions">
                    <button type="button" className="qty-btn" onClick={()=>qtyDown(item.id)}>-</button>
                    <span className="qty-value">{item.quantity}</span>
                    <button type="button" className="qty-btn" onClick={()=>qtyUp(item.id)}>+</button>
                    <button type="button" className="remove-btn" onClick={()=>removeItem(item.id)}>Устгах</button>
                </div>
            </div>
        </article>
    );
}
export default CartItemCard;