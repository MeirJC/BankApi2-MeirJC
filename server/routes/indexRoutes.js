import { Router } from "express";
import {
  addAccount,
  getAllAccounts,
  getAccountById,
  deleteAccount,
  depositToAccount,
  withdrawFromAccount,
  transferFromAccount,
} from "../controllers/accountsControllers.js";

export const indexRouter = Router();

indexRouter.get("/BankApi", getAllAccounts);
indexRouter.get("/BankApi/getaccount", getAccountById);
indexRouter.post("/BankApi/add", addAccount);
indexRouter.delete("/BankApi/delete", deleteAccount);
indexRouter.patch("/BankApi/deposit", depositToAccount);
indexRouter.patch("/BankApi/withdraw", withdrawFromAccount);
indexRouter.post("/BankApi/transfer", transferFromAccount);
