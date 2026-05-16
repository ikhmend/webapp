import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Restaurant from "./models/Restaurant.js";
import MenuItem from "./models/MenuItem.js";
import Order from "./models/Order.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB amjilttai");
  })
  .catch((error) => {
    console.error("MongoDB aldaa:", error);
  });

app.get("/", (req, res) => {
  res.send("Ajillaj bn");
});
// Restaurant авах API
app.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Restaurant мэдээлэл авахад алдаа гарлаа" });
  }
});
// Нэг restaurant авах API
app.get("/restaurants/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ id: Number(req.params.id) });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant олдсонгүй" });
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: "Restaurant мэдээлэл авахад алдаа гарлаа" });
  }
});
// Menu items авах API
app.get("/menuitems", async (req, res) => {
  try {
    const {restaurantId, category} = req.query;
    const filter = {};
    if (restaurantId) {
      filter.restaurantId = Number(restaurantId);
    }
    if (category) {
      filter.category = category;
    }
    const menuItems = await MenuItem.find(filter);
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: "Menu мэдээлэл авахад алдаа гарлаа" });
  }
});
// Захиалга үүсгэх API
app.post("/orders", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Захиалга үүсгэхэд алдаа гарлаа" });
  }
});
// Бүх захиалга авах API
app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Захиалга авахад алдаа гарлаа" });
  }
});
// Нэг захиалга авах API
app.get("/orders/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Захиалга олдсонгүй" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Захиалга авахад алдаа гарлаа" });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} port deer ajillaj bn`);
});
app.post("/seed/menuitems", async (req, res) => {
  try {
    const menuItems = [
      {
        id: 101,
        restaurantId: 1,
        category: "Classic Pizzas",
        name: "Margherita Pizza",
        image: "/zurguud/margherita pizza.jpg",
        status: "Эрэлттэй",
        description:
          "Шинэхэн моцарелла бяслаг, Сан Марцано улаан лооль, базилик, нэмэлт оливын тос",
        price: "28.000₮",
      },
      {
        id: 102,
        restaurantId: 1,
        category: "Classic Pizzas",
        name: "Pepperoni Pizza",
        image: "/zurguud/pepperoni.jpg",
        status: "Эрэлттэй",
        description:
          "Давхар пепперони, моцарелла бяслаг, улаан лоольны сүмс",
        price: "38.000₮",
      },
      {
        id: 201,
        restaurantId: 1,
        category: "Specialty Pizzas",
        name: "Truffle Mushroom",
        image: "/zurguud/truffle.jpg",
        status: "",
        description: "Зэрлэг мөөг, трюфель тос, фонтина бяслаг",
        price: "36.000₮",
      },
      {
        id: 202,
        restaurantId: 1,
        category: "Specialty Pizzas",
        name: "BBQ Chicken",
        image: "",
        status: "",
        description:
          "Шарсан тахиа, BBQ сүмс, улаан сонгино, утсан гөүда бяслаг",
        price: "22.000₮",
      },
      {
        id: 301,
        restaurantId: 1,
        category: "Salads & Starters",
        name: "Ceaser Salad",
        image: "",
        status: "",
        description: "Пармезан бяслаг, улаан лооль, цызарь сүмс, крахмаль",
        price: "13.000₮",
      },
      {
        id: 302,
        restaurantId: 1,
        category: "Salads & Starters",
        name: "Саримстай талх",
        image: "",
        status: "",
        description: "Саримстай цөцгий, амтлагчтай шинэхэн барьсан талх",
        price: "6.900₮",
      },
    ];
    await MenuItem.deleteMany({});
    const savedMenuItems = await MenuItem.insertMany(menuItems);
    res.status(201).json({
      message: "Menu items seed amjilttai.",
      data: savedMenuItems,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Menu items seed aldaa." });
  }
});
app.post("/seed/orders", async(req, res)=>{
    try{
        const orders=[{
      orderId: "#FH-1778494914800",
      restaurantName: "Artisan Pizza Co.",
      deliveryTime: "25-35 мин",
      paymentMethod: "Credit/Debit Card",
      address: "bdg, 016-r gudamj, 18-bair, 5-r orts",
      customerName: "enkhmend",
      customerPhone: "jargal",
      deliveryNote: "zalgaad heleerei ochood away",
      items: [
        {
          name: "Margherita Pizza",
          quantity: 3,
          price: 28000
        }
      ],
      subtotal: 84000,
      deliveryFee: 5000,
      serviceFee: 8400,
      total: 97400,
      id: "HSUJgrMjpPQ"
    },
];
await Order.deleteMany({});
const savedOrders=await Order.insertMany(orders);
res.status(200).json({
    message:"Orders seed amjilttai",
    data:savedOrders,
});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "orders seed aldaa."});

    }
});