import express from "express";
import hatsRouter from "../mongoose-7.10/routs/hatsRouts.js";
import connectDB from "./config/db.js";

const PORT = 3000;
const app = express();

connectDB();
app.use(express.json());
app.use("/hats", hatsRouter);
app.listen(PORT, () => console.log("server on"));
