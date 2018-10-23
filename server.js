const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("databse connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello!"));

// Use Routes
app.use("/api/users", users);
app.use("/app/profile", profile);
app.use("/app/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server runing on port ${port}`));
