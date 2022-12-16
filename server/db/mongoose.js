import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URL = `mongodb+srv://${process.env.USER}:${process.env.PASS}@bankapicluster.tbnqwzx.mongodb.net/BankApi`;

mongoose.connect(URL, (err, mongoDbInstance) => {
  if (err) {
    throw Error("MongoDB connection error: " + err);
  }
  const { host, port, name } = mongoDbInstance;
  console.log({ host, port, name });
});
