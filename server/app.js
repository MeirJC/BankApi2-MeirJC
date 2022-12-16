import cors from "cors";
import express from "express";
import { indexRouter } from "./routes/indexRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", indexRouter);

export { app };
