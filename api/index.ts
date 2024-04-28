require('dotenv').config(); 

import express from 'express';

const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies

app.get("/", (_, res) => {
    res.send("Ok");
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;