import dns from "dns";

dns.setServers(["8.8.8.8"]);

import { Client } from "cassandra-driver";
import dotenv from "dotenv";
import dns from "dns";

dns.setServers(["1.1.1.1"]);
dotenv.config();

if (!fs.existsSync(process.env.ASTRA_DB_SECURE_BUNDLE)) {
  throw new Error("Secure bundle not found");
}

const client = new Client({
  cloud: {
    secureConnectBundle: process.env.ASTRA_DB_SECURE_BUNDLE,
  },
  credentials: {
    username: process.env.ASTRA_DB_CLIENT_ID,
    password: process.env.ASTRA_DB_CLIENT_SECRET,
  },
  keyspace: "logger",
});

(async () => {
  try {
    await client.connect();
    console.log("Connected to Astra DB");
  } catch (err) {
    console.error("Connection error:", err);
  }
})();

export default client;