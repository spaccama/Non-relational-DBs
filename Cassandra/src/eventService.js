import client from "./cassandraClient.js";

export async function addEvent(userId, eventType, page) {
  const query =
  "INSERT INTO user_events (user_id, event_time, event_type, page ) VALUES (?, toTimestamp(now()), ?, ?)";
  await client.execute(query,[userId, eventType, page], {prepare:true})

}

export async function getRecentEvents(userId) {
  const query =
  "SELECT * FROM user_events (user_id, event_time, event_type, page ) VALUES (?, toTimestamp(now()), ?, ?)";
  await client.execute(query,[userId], {prepare:true})

}
