function MenuItemCard({ item }) {
  return (
    <div className="food-item">
      <div className="food-content">
        <h3>{item.name}</h3>
        <p className="light-text">{item.description}</p>
        <div className="food-footer">
          <p>{item.price}</p>
          <button className="dark-button">+Нэмэх</button>
        </div>
      </div>
      <img src={item.image} alt={item.name} />
    </div>
  );
}
export default MenuItemCard;