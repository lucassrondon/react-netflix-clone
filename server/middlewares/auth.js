const JWT = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    console.log(req)
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      return res.status(401).send();
    }

    const providedToken = bearerToken.split("Bearer ")[1];
    if (!providedToken) {
      return res.status(401).send();
    }

    try {
      const userPayload = await JWT.verify(providedToken, process.env.JWT_SECRET_KEY);
    } catch (error) {
      return res.status(401).send();
    }

    next();

  } catch (error) {
    return res.status(500).send();
  }
};

module.exports = auth;