import { Router } from "express";

import address from "./address.route";
import user from "./user.route";
import auth from "./auth.route";

import isAuthenticated from "../middlewares/auth.middleware";

const router = Router();

router.use("/auth", auth);
router.use("/users", user);

router.use(isAuthenticated);

router.use("/addresses", address);

export default router;
