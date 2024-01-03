
import express from 'express';

import cors from "cors"
import dotenv from "dotenv"
// import { dbConnection } from "./db.js";
import { userRouter } from "./Routes/user.js";
import { customersRouter } from "./Routes/customers.js";
import { isAuthenticated } from "./controllers/auth.js";
import { connectToMongoDB } from "./db.js";

// configuring env
dotenv.config();

const app = express();
const PORT = process.env.PORT
// middlewares
app.use(express.json())
app.use(cors())
//db connection
// dbConnection()
connectToMongoDB()

//routes

app.use("/api/user", userRouter);
app.use("/api/customers", isAuthenticated, customersRouter)

//server connection
app.listen(PORT, () => console.log(`Server running in localhost:${PORT}`))