import { where } from "sequelize";
import model from "../db/mysql/models/index.js";

const { Kategori } = model;

export default {
  createKategori: async (req, res) => {
    const { name } = req.body;
    try {
      const kategori = await Kategori.create({ name });
      res.status(201).json(kategori);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateKategori: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const kategori = await Kategori.findByPk(id);
      if (!kategori)
        return res.status(404).json({ error: "Kategori not found" });

      kategori.name = name;
      await kategori.save();
      res.json(kategori);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteKategori: async (req, res) => {
    const { id } = req.params;
    try {
      const kategori = await Kategori.findByPk(id);
      if (!kategori)
        return res.status(404).json({ error: "Kategori not found" });

      await kategori.update({ deleted: true });
      res.json({ message: "Kategori deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getKategoriById: async (req, res) => {
    const { id } = req.params;
    try {
      const kategoris = await Kategori.findOne({ where: { id } });
      console.log(kategoris);
      res.json(kategoris);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllKategori: async (req, res) => {
    try {
      const kategoris = await Kategori.findAll();
      console.log(kategoris);
      res.json(kategoris);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
