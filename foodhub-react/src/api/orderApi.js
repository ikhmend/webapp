import { API_BASE_URL } from "./config";
export async function createOrder(orderData) {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });
  if (!response.ok) {
    throw new Error("Захиалга хадгалахад алдаа гарлаа.");
  }
  return response.json();
}
export async function getOrderById(id) {
  const response = await fetch(`${API_BASE_URL}/orders/${id}`);
  if (!response.ok) {
    throw new Error("Захиалгын мэдээлэл олдсонгүй.");
  }
  return response.json();
}