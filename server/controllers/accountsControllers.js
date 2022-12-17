import { Account } from "../models/accountModel.js";
//! get all accounts
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
//! get all accounts by ownerID
export const getAllAccountsByOwnerID = async (req, res) => {
  const { ownerID } = req.body;
  try {
    const accounts = await Account.find({ _id: ownerID });
    res.status(200).send(accounts);
  } catch (err) {
    console.log(
      "--Error in getAllAccountsByOwnerID in accountsController.js--",
      err.message
    );
    res.status(418).send(err);
  }
};
//! add account
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
//! get account by id
export const getAccountById = async (req, res) => {
  const { id } = req.body;
  try {
    const account = await Account.findById(id);
    if (!account) {
      return res.status(404).send(`Account ${id} not found`);
    }
    res.status(200).send(account);
  } catch (err) {
    console.log(
      "--Error in getAccountById in accountsController.js--",
      err.message
    );
    res.status(418).send(err);
  }
};
//! make remove account by id in request body
export const deleteAccount = async (req, res) => {
  const { id } = req.body;
  console.log("ID!", id);
  try {
    const deletedAccount = await Account.findOneAndDelete({ _id: id });
    if (!deletedAccount) {
      return res.status(404).send(`Account ${id} not found`);
    }
    console.log("deletedAccount", deletedAccount);
    res.status(200).send(deletedAccount);
  } catch (err) {
    console.log(
      "--Error in deleteAccount in accountsController.js--",
      err.message
    );
    res.status(418).send(err);
  }
};
//! deposit to account by id
export const depositToAccount = async (req, res) => {
  const { id, amount } = req.body;
  try {
    const depositAccount = await Account.findOneAndUpdate(
      { _id: id },
      { $inc: { balance: amount } }
    );
    if (!depositAccount) {
      return res.status(404).send(`Account ${id} not found`);
    }
    if (amount < 0) {
      return res
        .status(404)
        .send(`Amount ${amount} is not valid, must be a positive number`);
    }
    res.status(200).send(`${amount} was dposited to account ${id}`);
  } catch (err) {
    console.log(
      "--Error in depositAccount in accountsController.js--",
      err.message
    );
    res.status(418).send(err);
  }
};
//! withdraw from account by id
export const withdrawFromAccount = async (req, res) => {
  const { id, amount } = req.body;
  const account = await Account.findOne({ _id: id });
  try {
    if (amount > account.credit + account.balance) {
      return res.status(404).send(`Not Enough Credit!`);
    }
    if (amount < 0) {
      return res
        .status(404)
        .send(`Amount ${amount} is not valid, must be a positive number`);
    }
    const withdrawAccount = await Account.findOneAndUpdate(
      { _id: id },
      { $inc: { balance: -amount } }
    );
    if (!withdrawAccount) {
      return res.status(404).send(`Account ${id} not found`);
    }
    res.status(200).send(`${amount} was withdrawed from account ${id}`);
  } catch (err) {
    console.log(
      "--Error in depositAccount in accountsController.js--",
      err.message
    );
    res.status(418).send(err);
  }
};
//! transfer from account by sender id to account by receiver id
export const transferFromAccount = async (req, res) => {
  const { senderId, receiverId, amount } = req.body;
  const senderAccount = await Account.findOne({ _id: senderId });
  const receiverAccount = await Account.findOne({ _id: receiverId });
  if (!senderAccount || !receiverAccount) {
    return res
      .status(404)
      .send(`Account ${senderId} or ${receiverId} not found`);
  }
  try {
    if (amount > senderAccount.credit + senderAccount.balance) {
      return res.status(404).send(`Not Enough Credit!`);
    }
    if (amount < 0) {
      return res
        .status(404)
        .send(`Amount ${amount} is not valid, must be a positive number`);
    }
    const withdrawedAccount = await Account.findOneAndUpdate(
      { _id: senderId },
      { $inc: { balance: -amount } }
    );
    const depositedAccount = await Account.findOneAndUpdate(
      { _id: receiverId },
      { $inc: { balance: amount } }
    );
    res
      .status(200)
      .send(
        `${amount} was transfered from account ${senderId} to account ${receiverId}`
      );
  } catch (err) {
    console.log(
      "--Error in depositAccount in accountsController.js--",
      err.message
    );
    res.status(418).send(err);
  }
};
