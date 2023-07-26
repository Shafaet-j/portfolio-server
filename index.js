const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

const projects = require("./projects.json");

app.get("/", (req, res) => {
  res.send("portfolio is runnig");
});

app.get("/projects", (req, res) => {
  res.send(projects);
});

app.get("/projects/details/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const result = projects.find((project) => project.id === id);
  console.log(result)
  res.send(result);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
