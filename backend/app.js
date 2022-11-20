import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/connectdb.js";
import transactionRoutes from "./routes/transactionRoutes.js";

const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = "mongodb://localhost:27017/";



//CORS Policy
app.use(cors());

//Database connection
connectDB(DATABASE_URL);

//JSON
app.use(express.json());

//Load Routes
app.get("/",(req,res)=>{
    res.send("Hello from the trasactions api");
});
app.use("/api/transaction",transactionRoutes);

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
})