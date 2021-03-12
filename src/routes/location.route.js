import { Router } from "express";
import Validate from "../middlewares/schema.middleware";
import Schema from "../validations/location.validation";

import LocationController from "../controllers/location.controller";

const router = Router();

router.get("/", LocationController.index);

router.post("/", Validate(Schema.create), LocationController.create);

router.put("/:id", Validate(Schema.create), LocationController.update);

router.delete("/:id", LocationController.delete);

export default router;
