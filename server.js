const express = require("express");
const app = express();

app.set("trust proxy", true);
app.get("/", (req, res) => {
  const ip = req.ip;
  res.json({ ip });
});

app.listen(3000, (req, res) => {
  console.log("server listening on 3000");
});
