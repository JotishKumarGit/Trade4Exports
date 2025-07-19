import express from 'express';
import cors from 'cors';
import connectDb from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
    res.send("This is root");
})

connectDb();
app.listen(PORT, () => {
    console.log(`Server is listen port ${PORT}`)
})

