import model from "../db/mysql/models/index.js";
import bcrypt from "bcryptjs";
import jwt from "../middlewares/jwt.js";

const { Users } = model;

export default {
  register: async (req, res) => {
    const { username, password } = req.body;
    try {
      const hashPass = await bcrypt.hash(password, 10);
      const user = await Users.create({ username, password: hashPass });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await Users.findOne({ where: { username } });
      if (!user) return res.status(404).json({ error: "User not found" });
      console.log(user);
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ error: "Invalid Password" });

      const token = jwt.generateToken({ id: user.id, username: user.username });
      res.json({ token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },
};
