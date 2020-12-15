import { Router } from "express";
import Validate from "../middlewares/schema.middleware";
import Schema from "../validations/appointment.validation";

import AppointmentController from "../controllers/appointment.controller";

const router = Router();

router.get("/", AppointmentController.index);

router.post("/", Validate(Schema.create), AppointmentController.create);

// router.delete("/:id", AddressController.delete);

export default router;
