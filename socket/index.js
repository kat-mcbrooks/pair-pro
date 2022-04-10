//socket backend

const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when a user connects
  console.log("a user connected.");
  //take user id and socket id from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });
  console.log("users array after socket.on('addUser'):" + users);

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, messageBody }) => {
    const user = getUser(receiverId);
    io.to(user?.socketId).emit("getMessage", {
      senderId,
      messageBody,
    });
  });

  //disconnection
  socket.on("disconnect", () => {
    console.log("user has disconnect");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
