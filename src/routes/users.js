// src/routes/users.js
import express from "express";

const router = express.Router();

/**
 * Simulated users API.
 * Demonstrates RESTful endpoint structure.
 */

const users = [
  { id: 1, name: "Alice" }, 
  { id: 2, name: "Bob" }
];

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// GET user by ID
router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
 
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

export default router;
