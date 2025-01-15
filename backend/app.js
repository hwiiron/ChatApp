// 데이터베이스 연결
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors()); // 어떠한 주소로든 접근을 허용

mongoose
  .connect(process.env.DB)
  .then(() => console.log("connected to database"));

module.exports = app;
