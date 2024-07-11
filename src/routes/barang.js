import express from "express";

// MIDDLEWARES
import jwt from "../middlewares/jwt.js";
import multer from "../middlewares/upload.js";

const { upload } = multer;

// CONTROLLERS ROUTES
import barangController from "../controllers/barang.js";

// AUTH
const barangRouter = express.Router();
barangRouter.get("/", jwt.authenticateToken, barangController.getAllBarang);
barangRouter.get("/:id", jwt.authenticateToken, barangController.getBarangById);
barangRouter.post(
  "/create",
  jwt.authenticateToken,
  upload,
  barangController.createBarang
);
barangRouter.put(
  "/update/:id",
  jwt.authenticateToken,
  upload,
  barangController.updateBarang
);
barangRouter.put(
  "/delete/:id",
  jwt.authenticateToken,
  barangController.deleteBarang
);

export default {
  barangRouter,
};
