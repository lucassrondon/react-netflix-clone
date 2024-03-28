const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const { prisma } = require("../db/index.js");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

router.post(
  "/signup",
  [
    check("email", "Please input a valid email.").isEmail(),
    check("password", "Please input a valid password (6-255).").isLength({
      min: 6,
      max: 255,
    }),
    check("username", "Please input a valid username (6-255).").isLength({
      min: 6,
      max: 255,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json(errors);
      }

      const email = req.body.email.trim();
      const username = req.body.username.trim();
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const userExists = await prisma.User.findUnique({
        where: {
          email,
        },
      });

      if (userExists) {
        return res.status(403).json({
          errors: [
            {
              msg: "User already exists.",
              value: email,
            },
          ],
        });
      }

      const user = await prisma.User.create({
        data: {
          email,
          username,
          password: hashedPassword,
        },
        select: {
          email: true,
          username: true,
          id: true,
        },
      });

      const token = JWT.sign(user, process.env.JWT_SECRET_KEY, {
        expiresIn: 3600,
      });

      return res.status(201).json({
        msg: "User created.",
        value: {
          user,
          token,
        },
      });
    } catch (error) {
      return res
        .status(500)
        .json({ errors: [{ msg: "Something went wrong." }] });
    }
  }
);

router.post(
  "/login",
  [check("email").isEmail(), check("password").isLength({ min: 6, max: 255 })],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      const { password, email } = req.body;

      if (!errors.isEmpty()) {
        return res
          .status(401)
          .json({ errors: [{ msg: "Invalid credentials." }] });
      }

      const user = await prisma.User.findUnique({
        where: { email },
      });

      if (!user) {
        return res
          .status(401)
          .json({ errors: [{ msg: "Invalid credentials." }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(401)
          .json({ errors: [{ msg: "Invalid credentials." }] });
      }

      const userPayload = {
        email: user.email,
        username: user.username,
        id: user.id,
      };

      token = JWT.sign(userPayload, process.env.JWT_SECRET_KEY, {
        expiresIn: 3600,
      });

      return res.status(201).json({
        msg: "User logged in.",
        value: {
          user: userPayload,
          token,
        },
      });
    } catch (error) {
      return res
        .status(500)
        .json({ errors: [{ msg: "Something went wrong." }] });
    }
  }
);

router.get("/me", async (req, res) => {
  try {
    const bearerToken = req.headers.authorization;
    if (!bearerToken)
      return res.status(200).json({
        errors: [{ msg: "Invalid token." }],
        value: {
          user: null,
        },
      });

    const req_jwt = bearerToken.split("Bearer ")[1];
    if (!req_jwt)
      return res.status(200).json({
        errors: [{ msg: "Invalid token." }],
        value: {
          user: null,
        },
      });

    let payload;
    try {
      payload = await JWT.verify(req_jwt, process.env.JWT_SECRET_KEY);
    } catch (error) {
      return res.status(200).json({
        errors: [{ msg: "Invalid token." }],
        value: {
          user: null,
        },
      });
    }

    const userInfo = await prisma.User.findUnique({
      where: { email: payload.email },
      select: { id: true, email: true, username: true },
    });

    return res.status(200).json({
      msg: "User found.",
      value: {
        user: userInfo,
      },
    });
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: "Something went wrong." }] });
  }
});

module.exports = router;
