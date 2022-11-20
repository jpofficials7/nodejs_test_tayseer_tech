import express from "express";
const router = express.Router();
import TransactionController from "../controllers/transactionController.js";

router.post("/exchangeRate",TransactionController.exchangeRate);

router.get("/purpose",TransactionController.purpose);

router.get("/listTransaction",TransactionController.listTransaction);

router.post("/saveTransaction",TransactionController.saveTransaction);

export default router;

