import db from "../db/db.js";
import { fetchAll } from "../db/dbHelper.js";

export const getProducts = async () => {
  const sql = "SELECT * FROM products";

  try {
    const products = await fetchAll(db, sql);
    return products;
  } catch (e) {
    console.log(e);
  }
};
