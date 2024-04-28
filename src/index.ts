require('dotenv').config(); 
import express from 'express';

const app = express();
app.use(express.json()); // Middleware for parsing JSON bodies

app.get("/", (_, res) => {
    res.send("Ok");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});