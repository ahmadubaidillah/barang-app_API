import dotenv from "dotenv";

dotenv.config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,
  app_name: process.env.APP_NAME || "barang",

  db_server: process.env.DB_SERVER || "localhost",
  db_port: process.env.DB_PORT || 3306,
  db_name: process.env.DB_NAME || "db_barang",
  db_user: process.env.DB_USER || "root",
  db_pass: process.env.DB_PASS || "",

  jwt_secret: process.env.JWT_SECRET || "secret",

  processName: process.env.name,
};

export default config;
