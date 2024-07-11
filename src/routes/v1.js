// MIDDLEWARES

// ROUTES
import UsersRouter from "./user.js";
import KategoriRouter from "./kategori.js";
import BarangRouter from "./barang.js";

// ROUTINGS
const Route = (app) => {
  // USER
  app.use("/auth", UsersRouter.authRouter);
  app.use("/kategori", KategoriRouter.kategoriRouter);
  app.use("/barang", BarangRouter.barangRouter);

  // catch 404 and forward to error handler
  app.use((req, res) => {
    res.status(404).json({ error: "No such route exists" });
  });
};

export default Route;
