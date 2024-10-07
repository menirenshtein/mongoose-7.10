import express from "express";
import { getAllHats, createHat } from "../controllers/hatsController.js";

const router = express.Router();

router.route("/").get(getAllHats).post(createHat);


export default router