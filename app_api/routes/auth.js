const express = require("express");
const passport = require("passport");
const Account = require("../models/account");
const router = express.Router();

router.post("/auth/register", (req, res) => {
  Account.register(
    new Account({ username: req.body.username }),
    req.body.password,
    (err, account) => {
      if (err) return res.status(400).json({ error: err.message });
      return res.status(201).json({
        success: true,
        message: "Registration successful",
        user: account.username,
      });
    }
  );
});

router.post("/auth/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });
    req.logIn(user, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      return res.status(200).json({
        success: true,
        message: "Login successful",
        user: user.username,
      });
    });
  })(req, res, next);
});

module.exports = router;
