import { getDb } from "./mongoClient.js";
import { ObjectId } from "mongodb";

export async function addTodo(text) {
  const db = getDb()
  return await db.collection("todos").insertOne({ text, completed: false })
}

export async function getTodos() {
  const db = getDb()
  return await db.collection("todos").find().toArray()
}

export async function updateTodo(id, text) {
  const db = getDb()
  return await db.collection("todos").updateOne(
    { _id: new ObjectId(id) },
    { $set: { text } }
  )
}

export async function deleteTodo(id) {
  const db = getDb()
  return await db.collection("todos").deleteOne({ _id: new ObjectId(id) })
}