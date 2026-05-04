import { driver as _driver, auth } from "neo4j-driver";
import dotenv from "dotenv";
import dns from "dns";

dns.setServers(["1.1.1.1"]);
dotenv.config();

const driver = _driver(
  process.env.NEO4J_URI,
  auth.basic(
    process.env.NEO4J_USER,
    process.env.NEO4J_PASSWORD
  )
);

try {
  await driver.verifyConnectivity();
  console.log('Connection established');
} catch(err) {
  console.log(`Connection error\n${err}\nCause: ${err.cause}`);
  await driver.close();
}

export function getSession() {
  return driver.session();
}