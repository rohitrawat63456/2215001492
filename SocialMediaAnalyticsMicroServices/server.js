import express from 'express';
import userRouter from './Routes/userRoutes.js';
import cors from "cors"
const app = express();
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(userRouter);
app.get("/",(req,res)=>{
  res.json("server is running successfully");
})
const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
});