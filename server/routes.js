import { Router } from "express";
import { readCycleData, readMap } from "./controllers/controller.cycle_data.js";

const router = Router();

router.get("/cycle-data", readCycleData);
router.get("/map", readMap);

export { router };
