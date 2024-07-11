import jwt from "jsonwebtoken";
import config from "../config.js";

export default {
  authenticateToken: (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, config.jwt_secret, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  },

  generateToken: (user) => {
    return jwt.sign(user, config.jwt_secret, {
      expiresIn: "1d",
    });
  },
};
