import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/User.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import ListingRouter from "./routes/listing.route.js";
dotenv.config({ path: "api/.env" });

mongoose
  .connect(process.env.MONGO)
  .then((data) => {
    console.log(`Connected to MongoDB: ${data.connection.host}`);
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", ListingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
