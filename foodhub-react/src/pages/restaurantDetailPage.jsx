import restaurantData from "../data/restaurantData.json";
import RestaurantHeader from "../components/RestaurantHeader";
import MenuSection from "../components/MenuSection";
function RestaurantDetailPage() {
  return (
    <div>
        <RestaurantHeader restaurant={restaurantData}/>
        <MenuSection menu={restaurantData.menu}/>
    </div>
  );
}
export default RestaurantDetailPage;