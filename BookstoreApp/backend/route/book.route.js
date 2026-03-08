import express from "express";
import { getBook } from "../controller/book.controller.js"; // .js lagana zaroori hai

const router = express.Router();

router.get("/", getBook);

export default router;