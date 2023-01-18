import express from "express";
import routes from "./routes/index.js";

const app = express();

/* DEPENDENCIAS DO EXPRESS */
app.use(express.json());

routes(app);

export default app