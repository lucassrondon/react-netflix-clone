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
  }
);

router.post(
  "/login",
  [check("email").isEmail(), check("password").isLength({ min: 6, max: 255 })],
  async (req, res) => {
    const errors = validationResult(req);

    const { password, email } = req.body;

    if (!errors.isEmpty()) {
      return res.status(401).json({ errors: [{ msg: "Invalid credentials." }] });
    }

    const user = await prisma.User.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ errors: [{ msg: "Invalid credentials." }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ errors: [{ msg: "Invalid credentials." }] });
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
  }
);

module.exports = router;
