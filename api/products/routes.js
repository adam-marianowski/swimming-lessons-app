import express from "express";
import { getProducts } from "./service.js";

const router = express.Router();

router.get("/", (req, res) => {
  getProducts().then((products) => {
    res.status(200).json(products);
  });
});

export default router;
