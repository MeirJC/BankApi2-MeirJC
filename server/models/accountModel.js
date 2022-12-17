import { Schema, model } from "mongoose";
import validator from "validator";

const AccountSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  ownerID: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 5,
  },
  email: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
  credit: {
    type: Number,
    required: true,
    default: 0,
    //validate credit is big or equal to 0
    validate(value) {
      if (value < 0) {
        throw new Error("Credit must be a positive number");
      }
    },
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Account = model("Account", AccountSchema);

export { Account };

// {
//   "_id": "639c8e8058c499a29216d96a",
//   "firstName": "Eli",
//   "lastName": "Kopter",
//   "ownerID": "12345",
//   "email": "ab@cd.ef",
//   "balance": 1500,
//   "credit": 1000,
//   "isActive": true,
//   "__v": 0,
//   "createdAt": "2022-12-17T17:56:25.041Z"
// }

// {
//   "_id": "639de241c9a0404b03c76f35",
//   "firstName": "Avi",
//   "lastName": "Ron",
//   "ownerID": "12321",
//   "email": "ab@bd.ef",
//   "balance": 0,
//   "credit": 5000,
//   "isActive": true,
//   "createdAt": "2022-12-17T15:37:37.270Z",
//   "__v": 0
// }
