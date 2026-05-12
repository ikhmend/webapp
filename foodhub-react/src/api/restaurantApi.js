import { API_BASE_URL } from "./config";
export async function getRestaurants() {
  const response = await fetch(`${API_BASE_URL}/restaurants`);
  if (!response.ok) {
    throw new Error("Рестораны мэдээлэл авахад алдаа гарлаа.");
  }
  return response.json();
}
export async function getRestaurantById(id) {
  const response = await fetch(`${API_BASE_URL}/restaurants/${id}`);
  if (!response.ok) {
    throw new Error("Рестораны мэдээлэл олдсонгүй.");
  }
  return response.json();
}