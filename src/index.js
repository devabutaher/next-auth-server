import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import router from "./router/index.js";

const app = express();
dotenv.config();
connectDB();

app.use(
  cors({
    origin: ["http://localhost:3000", process.env.CLIENT_URL],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
app.get("/", (req, res) => res.json(`Server listening on port ${port}!`));

app.use("/api", router());
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
