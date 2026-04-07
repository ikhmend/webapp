import MenuItemCard from "./MenuItemCard";
function MenuSection ({section}){
    return (
        <div className="menu-group">
            <h2>{section.category}</h2>
            {section.items.map((item)=>(
                <MenuItemCard key={item.id} item={item}/>
            ))}
        </div>
    );
}
export default MenuSection;