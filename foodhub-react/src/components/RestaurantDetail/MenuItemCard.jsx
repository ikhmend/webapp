function MenuItemCard({ item, onAddToCart }) {
  return (
    <div className="food-item">
      {item.image && <img src={item.image} alt={item.name} />}
      <div className="food-content">
        <h3>{item.name}</h3>
        {item.status && <span className="status">{item.status}</span>}
        <p className="light-text">{item.description}</p>
        <p className="item-price">{item.price}</p>
      </div>
      <button className="dark-button" onClick={() => onAddToCart(item)}>+Нэмэх</button>
    </div>
  );
}
export default MenuItemCard;