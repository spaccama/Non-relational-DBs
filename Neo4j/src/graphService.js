import { getSession } from "./neo4jClient.js";

export async function createUser(name) {
  // TODO: CREATE node
}

export async function addFriend(user1, user2) {
  // TODO: CREATE relationship
}

export async function getFriends(name) {
  // TODO: MATCH friends
}

export async function deleteUser(name) {
  const session = getSession();
  await session.run(
    "MATCH (u:User {name: $name}) DETACH DELETE u",
    { name }
  );

  await session.close();
}