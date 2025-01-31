import express from "express";

const router = express.Router();

router.get("/faqs", getFaqs);
router.post("/faqs", createFaqs);

export default router;
