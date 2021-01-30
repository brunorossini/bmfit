import { Router } from "express";

import address from "./address.route";
import user from "./user.route";
import auth from "./auth.route";
import appointment from "./appointment.route";
import provider from "./provider.route";
import d4sign from "./d4sign.route";

import isAuthenticated from "../middlewares/auth.middleware";

const router = Router();

router.use("/auth", auth);
router.use("/users", user);
router.use("/d4sign", d4sign);

router.use(isAuthenticated);

router.use("/addresses", address);
router.use("/appointments", appointment);
router.use("/providers", provider);

export default router;
