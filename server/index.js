const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");
const morgan = require("morgan");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(morgan("tiny"));

const io = socketio(server);

const PORT = 4000 || process.env.PORT;

// When Client Connects
io.on("connection", (socket) => {
  console.log(`${socket.id} is connected`);

  //   Emits message to only the socket who connected
  socket.emit("message", "Welcome to Doodle");

  //   Emits message to everyone
  io.emit("message", `${socket.id} just joined.`);

  //   Emits message to everyone but the socket who connected
  socket.broadcast.emit("message", `${socket.id} just connected`);

  socket.on("disconnect", () => {
    io.emit("message", "A user has left the chat");
  });
});

server.listen(PORT, () => {
  console.log(`Server running on : ${PORT}`);
});
