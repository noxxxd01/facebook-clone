import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import userRoutes from './routes/loginRoutes.js';

dotenv.config()

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json())
app.use(cors())


// DB
connectDB()

app.use('/users', userRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})