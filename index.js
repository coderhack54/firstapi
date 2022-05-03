const express = require("express");
const app = express();

const userRouter = require("./routers/userRouter");
const port = "5001";

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000","http://192.168.103.132:3000"],
  },
});

//receiving event
io.on("connection", (socket) => {
  console.log("client connected");

  // Do all operations after  connection here
  socket.on("sendmsg", (msg) => {
    console.log(msg);
    msg.sent=false;
    socket.broadcast.emit('recmsg',msg);
  });
});

// const home=require("./home")

app.use(express.json()); // this is an important middleware for parsing the json data
app.use("/user", userRouter);

// creating a end point for /
app.get("/", (req, res) => {
  //for the server
  console.log("request on /");

  //for the client
  res.send("Request processed on /");
});
app.get("/home", (req, res) => {
  //for the server
  console.log("request on /home");

  //for the client
  res.send("Request processed on /home");
  res.status(200).render(home);
});
app.get("/add", (req, res) => {
  //for the server
  console.log("request on /add");

  //for the client
  res.send("Request processed on /add");
});

httpServer.listen(port, () => {
  console.log("server started");
});
