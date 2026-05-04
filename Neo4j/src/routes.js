import { Router } from "express";
import { createUser, addFriend, getFriends, deleteUser } from "./graphService.js";

const router = Router();

// Create user
router.post("/users", async (req, res) => {
  const { name } = req.body;
  await createUser(name);
  res.send("User created");
});

// delete user
router.delete("/users/:name", async (req, res) => {
  const { name } = req.params;
  console.log("delete user", name);
  await deleteUser(name);
  res.send(`User ${name} deleted`);
});

// Create friendship
router.post("/friends", async (req, res) => {
  const { user1, user2 } = req.body;
  await addFriend(user1, user2);
  res.send("Friendship created");
});

// Get friends
router.get("/friends/:name", async (req, res) => {
  const friends = await getFriends(req.params.name);
  res.json(friends);
});

export default router;