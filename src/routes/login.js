import express from "express";
export const router = express.Router();

// Simulated user data
const users = [
  { username: "alice", password: "1234" },
  { username: "bob", password: "abcd" }
];

// GET login page
router.get("/", (req, res) => {
  res.send(`
    <form method="POST">
      Username: <input name="username"/>
      Password: <input name="password" type="password"/>
      <button>Login</button>
    </form>
  `);
});

// POST login
router.post("/", express.urlencoded({ extended: true }), (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) { 
    res.send(`Welcome, ${username}!`);
  } else {
    res.status(401).send("Invalid credentials");
  }
});

export default router;
