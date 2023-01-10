const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extend: true }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    var peso = Number(req.body.num1);
    var altura = Number(req.body.num2) / 100;
    var imc = peso / Math.pow(altura, 2);
    res.send("Resultado para: <br>- Peso: "+ peso +" kg.<br>- Altura: " + altura + "m.<br><br>- El IMC es: " + imc.toFixed(2));
});