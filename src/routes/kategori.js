import express from "express";

// MIDDLEWARES
import jwt from "../middlewares/jwt.js";

// CONTROLLERS ROUTES
import kategoriController from "../controllers/kategori.js";
// AUTH
const kategoriRouter = express.Router();
kategoriRouter.get(
  "/",
  jwt.authenticateToken,
  kategoriController.getAllKategori
);
kategoriRouter.get(
  "/:id",
  jwt.authenticateToken,
  kategoriController.getKategoriById
);
kategoriRouter.post(
  "/create",
  jwt.authenticateToken,
  kategoriController.createKategori
);
kategoriRouter.put(
  "/update/:id",
  jwt.authenticateToken,
  kategoriController.updateKategori
);
kategoriRouter.put(
  "/delete/:id",
  jwt.authenticateToken,
  kategoriController.deleteKategori
);

export default {
  kategoriRouter,
};
