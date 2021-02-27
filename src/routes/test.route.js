import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.json({ abc: 123567890 });
});

export default router;
