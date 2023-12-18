const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const MongoClient = require("mongodb").MongoClient;
const uri = process.env.MONGO_URI;
const createRouter = require("./helpers/create_router.js");

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("recipes_project");
    const recipesCollection = db.collection("recipes");
    const recipesRouter = createRouter(recipesCollection);
    app.use("/api/recipes", recipesRouter);
    const tipsCollection = db.collection("tips");
    const tipsRouter = createRouter(tipsCollection);
    app.use("/api/tips", tipsRouter);
  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
