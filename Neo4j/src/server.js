import express, { json } from "express";
import routes from "./routes.js";
import path from "path";

const app = express();

app.use(json());
app.use(express.static(path.join(process.cwd(), "public")));
app.use(routes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});