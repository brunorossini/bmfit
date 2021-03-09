import { Router } from "express";
import Validate from "../middlewares/schema.middleware";
import Schema from "../validations/address.validation";

import AddressController from "../controllers/address.controller";

const router = Router();

router.get("/", AddressController.index);

router.post("/", Validate(Schema.create), AddressController.create);

router.put("/:id", Validate(Schema.create), AddressController.update);

router.delete("/:id", AddressController.delete);

export default router;
