const express = require("express");
const dataBase = require("./connection");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const { ObjectId } = require("mongodb");

const app = express();

app.use(bodyParser.json());
app.use(cors());
const uploadPath = path.join(__dirname, "../src/assets/Videos");
// console.log(uploadPath);

app.use("/videos", express.static(uploadPath));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
let collection;

dataBase().then((db) => {
  collection = db.collection("coursesCardsData");
});

app.post("/api/upload", upload.single("file"), (req, res) => {
  const newFormData = {
    title: req.body.title,
    description: req.body.description,
    filePath: req.file ? `/Videos/${req.file.filename}` : "",
  };

  collection.insertOne(newFormData, (err, result) => {
    if (err) {
      console.log(res.status(500).send(err));
    } else {
      res.status(200).send(result.ops[0]);
    }
  });
});

app.get("/api/data", async (req, res) => {
  const data = await collection.find({}).toArray();
  res.status(200).send(data);
});

app.get("/api/data/:id", async (req, res) => {
  const id = req.params.id;
  const course = await collection.findOne({ _id: new ObjectId(id) });
  res.status(200).send(course);
});

app.put("/api/data/:id", async (req, res) => {
  const id = req.params.id;
  const updatedCourse = {
    title: req.body.title,
    description: req.body.description,
    filePath: req.file ? `/Videos/${req.file.filename}` : "",
  };

  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedCourse }
  );
});

module.exports = app;
