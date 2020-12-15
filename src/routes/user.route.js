import { Router } from "express";
import Validate from "../middlewares/schema.middleware";
import Schema from "../validations/user.validation";

import UserController from "../controllers/user.controller";

const router = Router();

router.get("/", UserController.index);

router.post("/", Validate(Schema.create), UserController.create);

export default router;
