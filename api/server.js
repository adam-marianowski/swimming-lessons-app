import express from "express";
import productsRoutes from "./products/routes.js";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/products", productsRoutes);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
