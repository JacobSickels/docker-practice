import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";

const prisma = new PrismaClient();

const app = express();

app.use(cors());

const PORT = 5000;

app.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });

  res.send(allUsers);
});

app.get("/users", async (req, res) => {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });

  res.send(allUsers);
});

app.listen(PORT, () => {
  console.log(`Express server is listening at ${PORT}`);
});
