import { Schema, model } from "mongoose";

const AccountSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  ownerID: { type: String, required: true, minlength: 5, maxlength: 5 },
  email: { type: String, required: false },
  balance: { type: Number, required: true, default: 0 },
  credit: { type: Number, required: true, default: 0 },
  isActive: { type: Boolean, required: true, default: true },
});

const Account = model("Account", AccountSchema);

export { Account };
