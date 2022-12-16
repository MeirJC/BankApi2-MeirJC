import { Account } from "../models/accountModel.js";

export const getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({});
    res.status(200).send(accounts);
  } catch (err) {
    console.log(
      "--Error in getAllAccounts in accountsController.js--",
      err.message
    );
    res.status(418).send(err);
  }
};
export const addAccount = async (req, res) => {
  try {
    const { body } = req;
    const newAccount = await Account.create(body);
    res.status(201).send(newAccount);
  } catch (err) {
    console.log(
      "--Error in addAccount in accountsController.js--",
      err.message
    );
    res.status(418).send(err);
  }
};
