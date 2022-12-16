import { Router } from "express";
import { addAccount, getAllAccounts } from "../controllers/accountsControllers.js";

export const indexRouter = Router();

indexRouter.get("/BankApi", getAllAccounts);
indexRouter.post("/BankApi/add", addAccount);