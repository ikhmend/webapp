import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    restaurantName: {
      type: String,
      required: true,
    },
    deliveryTime: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      default: "Credit/Debit Card",
    },
    address: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerPhone: {
      type: String,
      required: true,
    },
    deliveryNote: {
      type: String,
      default: "",
    },
    items: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    subtotal: {
      type: Number,
      required: true,
    },
    deliveryFee: {
      type: Number,
      required: true,
    },
    serviceFee: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", OrderSchema);
export default Order;