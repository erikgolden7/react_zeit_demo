const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  port = 3001,
  app = express(),
  config = require("./config"),
  session = require("express-session"),
  massive = require("massive");
require("dotenv").config();

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => app.set("db", dbInstance))
  .catch(console.log);

app.use(
  session({
    secret: process.env.SECRET,
    resave: process.env.RESAVE,
    saveUninitialized: process.env.SAVE_UNINITIALIZED
  })
);
app.use(cors());
app.use(bodyParser.json());
app.use("/", express.static(`${__dirname}/../build`));

app.get("/api/todos", (req, res) => {
  const db = req.app.get("db");
  db
    .get_todos()
    .then(todos => {
      return res.send(todos);
    })
    .catch(console.log);
});
app.post("/api/todos", (req, res) => {
  const db = req.app.get("db");
  db
    .post_todos(req.body.todo)
    .then(todos => {
      return res.send(todos);
    })
    .catch(console.log);
});
app.delete("/api/todos/:id", (req, res) => {
  const db = req.app.get("db");
  db
    .remove_todo(req.params.id)
    .then(todos => {
      return res.send(todos);
    })
    .catch(console.log);
});

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, function() {
  console.log("Server listening on port", port);
});
