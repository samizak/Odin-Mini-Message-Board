require("dotenv").config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db";

import { messageRouter } from "./routes/message";

const app = express();
const PORT = process.env.PORT || 3500;

connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", messageRouter);

app.all("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
