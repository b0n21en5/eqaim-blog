import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import blogRoutes from "./routes/blogRoutes.js";
import connectDB from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

dotenv.config();

// database config
connectDB();

// es-module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/build")));

// routes
app.use("/api/blogs", blogRoutes);

// rest api
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log("connected to backend");
});
