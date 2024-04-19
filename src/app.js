const express = require("express");
const app = express();

const path = require("path");

app.get("/", (req, res) => {
    res.send("Bienvenido Messi");
})

app.use(express.static(path.join(__dirname, "../public")));
app.use((req, res) => {
    res.render("index.html")
})

app.listen(3000, () => {
    console.log("servidor a la espera de conexiones")
})