import { Router } from "express";

import Validate from "../middlewares/schema.middleware";
import Schema from "../validations/auth.validation";

import AuthController from "../controllers/auth.controller";

const router = Router();

router.post("/", Validate(Schema.create), AuthController.create);

export default router;
