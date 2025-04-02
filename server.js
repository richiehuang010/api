const express = require("express");
const app = express();
const mysql = require("mysql");

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kampus",
});

connect.connect(() => {
  console.log("connection successfully");
});

connect.query("SELECT * FROM nama", (err, result) => {
  app.get("/", (req, res) => {
    res.send(result);
    console.log("semua data dari 'nama' berhasil diambil");
  });
});

app.listen(3002, () => {
  console.log("code is running on PORT 3002");
});
