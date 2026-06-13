const redis = require("../config/redis");

const LIMIT = 2; //10
const WINDOW = 60;

module.exports = async (req, res, next) => {
  try {
    const ip = req.ip;
    const count = await redis.incr(ip);
    if (count === 1) {
      await redis.expire(ip, WINDOW);
    }
    if (count > LIMIT) {
      return res.status(429).json({
        message: "Too many requests",
      });
    }
    next();
  } catch (err) {
    next(err);
  }
};
