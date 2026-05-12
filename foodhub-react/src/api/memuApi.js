import {API_BASE_URL} from "./config";
export async function getMenuItemsByRestaurantId(restaurantId) {
  const response = await fetch(
    `${API_BASE_URL}/menuItems?restaurantId=${restaurantId}`
  );
  if (!response.ok) {
    throw new Error("Меню мэдээлэл авахад алдаа гарсан.");
  }
  return response.json();
}