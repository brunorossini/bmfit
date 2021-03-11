import { Router } from "express";

import AvailableController from "../controllers/available.controller";

const router = Router();

router.get("/:providerId", AvailableController.index);

export default router;
