require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const controller = require("./controller");
const app = express();
const nodemailer = require("nodemailer");


const {
  CONNECTION_STRING,
  SERVER_PORT,
  SESSION_SECRET,
  SERVER_EMAIL,
  SERVER_PASSWORD,
} = process.env;

app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SERVER_EMAIL,
    pass: SERVER_PASSWORD,
  },
});

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 48 },
    secret: SESSION_SECRET,
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  app.set("transporter", transporter);
  console.log(`Database is connected.`);
});

// app.get("/api/users", controller.getAllUsers);
app.get("/api/posts", controller.getAllPosts);
app.post("/api/user", controller.login);
app.get("/api/logout", controller.logout);
app.get("/api/verify", controller.user);
app.post("/api/contact", controller.contact);
app.post("/api/addPost", controller.addPost);
app.put("/api/updatePost/:id", controller.updatePost);
app.delete("/api/deletePost/:id", controller.deletePost);

app.listen(SERVER_PORT, () =>
  console.log(`You are connected to port ${SERVER_PORT}.`)
);
