import mongoose from "mongoose";
const RestaurantSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    heroImage: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    cuisine: {
      type: [String],
      default: [],
    },
    priceLevel: {
      type: String,
      default: "",
    },
    deliveryTime: {
      type: String,
      default: "",
    },
    distance: {
      type: String,
      default: "",
    },
    deliveryFee: {
      type: String,
      default: "",
    },
    offer: {
      type: String,
      default: "",
    },
    reviewsSummary: {
      type: Object,
      default: {},
    },
    reviews: {
      type: Array,
      default: [],
    },
    info: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
export default Restaurant;