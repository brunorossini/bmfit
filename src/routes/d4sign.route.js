import { Router } from "express";

import d4signController from "../controllers/d4sign.controller";

const router = Router();

router.get("/", d4signController.index);
router.post("/", d4signController.create);

export default router;
