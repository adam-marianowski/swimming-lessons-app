import sqlite3 from "sqlite3";

const db = new sqlite3.Database("../db/database.db", sqlite3.OPEN_READWRITE);

export default db;
