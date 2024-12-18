import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${8080}`);
});

const MONGO_URL =
  "mongodb+srv://loflo_db_user:FIHGzRkNCQJsbb7d@loflo-blog-api.5ibhklb.mongodb.net/?retryWrites=true&w=majority&appName=loflo-blog-api";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
