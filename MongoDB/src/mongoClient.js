import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import dns from "dns";

dns.setServers(["1.1.1.1"]);
dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

let db;

export async function connect() {
  await client.connect();
  db = client.db("todo_app");
  console.log("Connected to MongoDB Atlas");
}

export function getDb() {
  if (!db) {
    throw new Error("DB not initialized");
  }
  return db;
}