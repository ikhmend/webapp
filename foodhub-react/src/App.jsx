import restaurantData from "./data/restaurantData.json";
import "./App.css";
import RestaurantPage from "./components/RestaurantPage";
function App(){
  return <RestaurantPage restaurant={restaurantData}/>;
}
export default App;
