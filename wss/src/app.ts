import "module-alias/register";

import express from "express";
import { Server, type Socket } from "socket.io";
import http from "http";
import morgan from "morgan";
import { ClientEvents, ServerEvents } from "./events";

try {
  const app = express();

  app.use(morgan(process.env.dev ? "dev" : "tiny"));

  app.get("/", (req, res) => {
    res.json({
      root: true,
    });
  });

  //   endpoint for testing websocket connection
  app.get("/test", (req, res) => {
    res.sendFile("./index.html", { root: __dirname });
  });

  const httpServer = http.createServer(app);

  const io = new Server<ServerEvents, ClientEvents>(httpServer, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    socket.on("example:read", (data) => {
      console.log("event:example:read", data);
      socket.emit("example:response", "data for response");
    });
  });
  //   test event for emitted current time in 1sec intervals
  setInterval(() => io.emit("test:time", new Date().toTimeString()), 1000);

  const PORT = process.env.PORT || 3001;

  httpServer.listen(PORT, () =>
    console.log(`Server is running on port ${PORT} now!`)
  );
} catch (error) {
  console.error(error);
}
