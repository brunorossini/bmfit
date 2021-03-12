import { Router } from "express";

import location from "./location.route";
import user from "./user.route";
import auth from "./auth.route";
import appointment from "./appointment.route";
import provider from "./provider.route";
import available from "./available.route";

import isAuthenticated from "../middlewares/auth.middleware";

const router = Router();

router.use("/auth", auth);
router.use("/users", user);

router.use(isAuthenticated);

router.use("/locations", location);
router.use("/appointments", appointment);
router.use("/providers", provider);
router.use("/available", available);

export default router;
