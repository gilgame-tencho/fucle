const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// ルートURLにアクセスしたときの処理
app.get("/", (req, res) => {
//   res.send("Hello World! Node.js Web App is running");
  console.log("__dirname is");
  console.log(__dirname);

  
  res.sendFile(path.join(__dirname, "menu.html"));
});


// サーバーを起動
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
