import express from "express";
import {
  getalljobs,
  postJobController,
  getmyjobs,
  editjob,
  deletejob,
} from "../controllers/jobController.js";

const router = express.Router();

router.post("/post", postJobController);
router.get("/getall", getalljobs);
router.get("/myjobs/:userId", getmyjobs);
router.post("/edit/:id", editjob);
router.get("/delete/:id", deletejob);

export default router;
