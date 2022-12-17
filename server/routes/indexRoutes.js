import { Router } from "express";
import {
  addAccount,
  getAllAccounts,
  getAccountById,
  updateAccount,
  getAllAccountsByOwnerID,
  deleteAccount,
  depositToAccount,
  withdrawFromAccount,
  transferFromAccount,
} from "../controllers/accountsControllers.js";

export const indexRouter = Router();

indexRouter.get("/BankApi", getAllAccounts);
indexRouter.get("/BankApi/getaccount", getAccountById);
indexRouter.get("/BankApi/getallbyowner", getAllAccountsByOwnerID);
indexRouter.post("/BankApi/add", addAccount);
indexRouter.post("/BankApi/update", updateAccount);
indexRouter.delete("/BankApi/delete", deleteAccount);
indexRouter.patch("/BankApi/deposit", depositToAccount);
indexRouter.patch("/BankApi/withdraw", withdrawFromAccount);
indexRouter.post("/BankApi/transfer", transferFromAccount);
