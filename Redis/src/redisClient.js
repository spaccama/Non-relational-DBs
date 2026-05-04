import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const client = createClient({
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT)
    }
});

client.on("error", (err) => console.error("Redis error:", err));

(async () => {
  await client.connect();
  console.log("Connected to Redis Cloud");
})();

export default client;
