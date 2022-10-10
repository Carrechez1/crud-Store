const express = require("express");

const db = require("./utils/database");

const initModels = require("./models/initModels");

const config = require("./config");

const moviesRouter = require("./store/products.router");

const app = express();

db.authenticate()
  .then(() => console.log("DB Autentication Succefully"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

initModels();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "ok!" });
});

app.use("/product", moviesRouter);

app.listen(config.port, () => {
  console.log(`server started at port ${config.port}`);
});
