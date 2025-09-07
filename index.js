const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
//   res.send("Hello World! Node.js Web App is running");
  res.sendFile(path.join(__dirname, "menu.html"));
});

app.get("/randomness/coin_hex", (req, res) => {
//   res.send("Hello World! Node.js Web App is running");
  res.sendFile(path.join(__dirname, "static/randomness/pt_coin_hex.html"));
});


// サーバーを起動
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
