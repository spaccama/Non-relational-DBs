# 🕸️ Neo4j Friends Graph (Hands-on Project)

## 🎯 Objective

Learn graph databases by building a simple application using **Neo4j**.

This project focuses on:

* Minimal JavaScript (Node.js + Express)
* Simple HTML UI
* Core graph concepts (nodes & relationships)

---

## 🧠 What You Will Learn

* Graph data modeling (nodes & relationships)
* Creating nodes (`MERGE`)
* Creating relationships (`MERGE`)
* Querying relationships (`MATCH`)
* Why graph databases are powerful for connected data

---

## ☁️ Prerequisite: Neo4j Aura

1. Create a free instance on Neo4j Aura
2. Copy your credentials:

   * URI
   * Username
   * Password

---

## ⚙️ Setup

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```
NEO4J_URI=neo4j+s://xxxx.databases.neo4j.io
NEO4J_USER=neo4j
NEO4J_PASSWORD=your_password
```

---

## ▶️ Run the Application

```bash
node src/server.js
```

Open in browser:

```
http://localhost:3000
```

---

## 🧪 Features

* 👤 Create users (nodes)
* 🤝 Create friendships (relationships)
* 🔍 Query a user’s friends

---

## 📁 Project Structure

```
src/
 ├── server.js
 ├── neo4jClient.js
 ├── routes.js
 ├── graphService.js         ← 🧪 YOUR TASK
 └── public/
     └── index.html
```

---

## 🧪 Your Task

Implement the logic in:

```
src/graphService.js
```

---

## 💡 Hints (Cypher Queries)

### Create a user

```cypher
MERGE (u:User {name: $name}) SET ... RETURN u
```

### Create a friendship

```cypher
MATCH (a:User {name: $user1}), (b:User {name: $user2})
MERGE (a)-[:FRIEND]->(b)
```

### Get friends

```cypher
MATCH (a:User {name: $name})-[:FRIEND]->(f)
RETURN f.name
```

---

## ✅ Expected Behavior

* Users are stored as nodes
* Friendships are stored as relationships
* Queries return connected users instantly