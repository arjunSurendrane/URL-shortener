import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  console.log("here");
  res.send("Welcome");
});

export default router;
