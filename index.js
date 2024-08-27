const express = require("express");
const path = require("path");

const app = express();

app.get("/debug", (req, res) => {
  console.log("Headers are", req.rawHeaders);
  res.send("OK");
});

app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server listening on port", port);
});

