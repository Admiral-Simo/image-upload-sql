const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.get("/images", (req, res) => {});

app.post("/upload", upload.single("file"), (req, res) => {
  const {
    file,
    body: { name },
  } = req;
  console.log(file);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
