import express from "express";
import { redirectUrl } from "../controller/shortner.js";
const router = express.Router();

router.get("/:id/ly", redirectUrl);

export default router;
