import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
    res.send("This is root");
})


app.listen(PORT, () => {
    console.log(`Server is listen port ${PORT}`)
})
