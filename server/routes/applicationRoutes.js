import express from "express";
import { applyJobController } from "../controllers/applicationController.js";

const router = express.Router();

router.post("/job/:jobid", applyJobController);

export default router;
