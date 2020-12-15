import { Router } from "express";

import ProviderController from "../controllers/provider.controller";

const router = Router();

router.get("/", ProviderController.index);

export default router;
