const express = require("express");

const app = express();

const port = 3001;

app.get("/api/test", (req, res) => {
  return res.status(200).send("Success");
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
