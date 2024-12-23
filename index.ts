import express from "express";
import ejsMate from "ejs-mate";
import path from "path";
import methodOverride from "method-override";
import mongoose from "mongoose";
import todoRoutes from "./routes/todos";

const app = express();

app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/todo-app';
mongoose.connect(dbUrl);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
    res.render("home");
});


app.listen(3000, () => {
    console.log("Listening on port 3000");
});

