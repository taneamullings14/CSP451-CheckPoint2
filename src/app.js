// User authentication routes registered here

import { router as loginRouter } from "./routes/login.js";

import express from "express"; 
import path from "path";
import { fileURLToPath } from "url";
import apiRouter from "./routes/api.js";
import viewRouter from "./routes/views.js";

const app = express();

import {authenticationUser } from "./services/authService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Body parsing
app.use(express.json());
app.use("/login", loginRouter);
app.use(express.urlencoded({ extended: true }));

// Static frontend
app.use(express.static(path.join(__dirname, "..", "public")));

// Routes
app.use("/", viewRouter);
app.use("/api", apiRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Error handler (keep simple for learning)
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const result = authenticatieUser(username, password);
  res.json(result);
});
