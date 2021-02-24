import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.json({ abc: 123 });
});

export default router;
