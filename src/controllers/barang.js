import model from "../db/mysql/models/index.js";
import cloudinary from "../utils/cloudinary.js";

const { Kategori, Barang } = model;

export default {
  createBarang: async (req, res) => {
    const { name, kategoriId, harga } = req.body;
    try {
      let imageUrl = "";
      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        imageUrl = result.secure_url;
      }
      const barang = await Barang.create({
        name,
        kategoriId,
        harga,
        image: imageUrl,
      });
      res.status(201).json(barang);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateBarang: async (req, res) => {
    const { id } = req.params;
    const { name, kategoriId, harga } = req.body;
    try {
      const barang = await Barang.findByPk(id);
      if (!barang) return res.status(404).json({ error: "Barang not found" });

      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        barang.image = result.secure_url || barang.image;
      }

      barang.name = name || barang.name;
      barang.kategoriId = kategoriId || barang.kategoriId;
      barang.harga = harga || barang.harga;
      await barang.save();
      res.json(barang);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteBarang: async (req, res) => {
    const { id } = req.params;
    try {
      const barang = await Barang.findByPk(id);
      if (!barang) return res.status(404).json({ error: "Barang not found" });

      await barang.update({ deleted: true });
      res.json({ message: "Barang deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getBarangById: async (req, res) => {
    const { id } = req.params;

    try {
      const barangs = await Barang.findOne({ where: { id } });
      res.json(barangs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllBarang: async (req, res) => {
    try {
      const barangs = await Barang.findAll();
      res.json(barangs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
