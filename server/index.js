const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const cors = require("cors");
const db = require("./connect");

app.use(cors());
app.use(express.json());
app.use("/images", express.static(__dirname + "/images"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const random = new Date().getTime();
    const imgsrc =
      "http://192.168.1.3:5000/images/" +
      random +
      path.extname(file.originalname);
    const insertData = "INSERT INTO users_file(file_src)VALUES(?)";
    db.query(insertData, [imgsrc], (err, result) => {
      if (err) throw err;
    });
    cb(null, random + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.get("/images", (req, res) => {
  query = "SELECT * FROM users_file";
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    res.status(500).end("failed uploading");
  } else {
    res.status(200).end("successfully uploaded");
  }
});

app.post("/auth/register", upload.single("file"), (req, res) => {
  console.log("file path", req.file, req.name, req.password);
  // db.query(
  //   "select * from users_profile where name = ?",
  //   req.body.name,
  //   (err, data) => {
  //     if (data[0]) {
  //       return res.status(403).send({ msg: "User already registered" });
  //     } else {
  //       db.query(
  //         "INSERT INTO users_profile(name, password, profile_image) VALUES (?, ?, ?)",
  //         [req.body.name, req.body.password, req.body.profile_image],
  //         (err, data) => {
  //           if (err) return res.status(500);
  //           res.send({
  //             msg: "successfully registered",
  //             token: "sdlkfjashi8weq;56654654",
  //           });
  //         }
  //       );
  //     }
  //   }
  // );
});

app.post("/auth/login", (req, res) => {
  console.log("request is comming");
  db.query(
    "SELECT * FROM users_profile WHERE name = ? AND password = ?",
    [req.body.name, req.body.password],
    (err, data) => {
      if (err) return res.status(500);
      if (data[0]) {
        res.send({
          msg: "successfully login",
          token: "sdlkfjashi8weq;56654654",
          profile_image: data[0].profile_image,
        });
        console.log("success");
      } else {
        res.status(403).send({ msg: "something went wrong" });
        console.log("failure");
      }
    }
  );
});

app.delete("/image/delete", (req, res) => {
  query = "DELETE FROM users_file where id = ?";
  db.query(query, req.body.id, (err, rows) => {
    if (err) throw err;
    res.status(200).end("successfully deleted");
  });
});

app.listen(5000, "192.168.1.3", () => {
  console.log("Server started on port 5000");
});
