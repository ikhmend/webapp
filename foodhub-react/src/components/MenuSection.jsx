import MenuItemCard from "./MenuItemCard";
function MenuSection ({section, addToCart}){
    return (
        <div className="menu-group">
            <h2>{section.category}</h2>
            {section.items.map((item)=>(
                <MenuItemCard 
                key={item.id} 
                item={item}
                onAddToCart={addToCart}/>
            ))}
        </div>
    );
}
export default MenuSection;