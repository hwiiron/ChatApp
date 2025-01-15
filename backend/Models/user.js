const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    // 유저 이름
    type: String,
    require: [true, "User must type name"],
    unique: true,
  },
  token: {
    // 유저 고유 토큰
    type: String,
  },
  online: {
    // 유저 접속 상태
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
