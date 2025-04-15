const express = require("express")
const dotenv = require("dotenv");
const app = express()

dotenv.config();

const PORT = process.env.PORT;

app.get("/api", (req, res) => {
    res.send("API Welcome Hello World");
})

app.listen(PORT, () => {
    console.log("Express API running in port : " + PORT);
});