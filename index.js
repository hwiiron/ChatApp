const { createServer } = require("http"); // HTTP 서버 생성 관련 모듈 가져오기
const app = require("./app"); // Express app 가져오기
const { Server } = require("socket.io"); // Socket.io 서버 생성 관련 모듈 가져오기
require("dotenv").config(); // 환경 변수 파일 로드

const httpServer = createServer(app); // HTTP 서버 생성 (Express 앱을 HTTP 서버에 통합)

// Socket.io 서버 생성 및 CORS 설정
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000", // 클라이언트가 localhost:3000에서만 연결할 수 있도록 제한
  },
});

// HTTP 서버 시작 및 포트 설정
httpServer.listen(process.env.PORT, () => {
  console.log("server listening on port", process.env.PORT);
});
